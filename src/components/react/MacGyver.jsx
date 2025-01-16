import React, { useState } from 'react';

const MacGyver = () => {
  const [serial, setSerial] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const factoryMap = {
    'F': 'Fremont, California',
    'X': 'Sacramento, California',
    'Y': 'York, Pennsylvania',
    'C': 'Cork, Ireland',
    'V': 'China (Foxconn)',
    'W': 'China (Quanta)',
    'R': 'China (Pegatron)',
    'M': 'China (Unknown)',
  };

  // Updated model detection for newer format
  const modelMap = {
    'HC': 'MacBook Air M1 (2020)',
    'Q6L': 'MacBook Pro 13" (2017)',
    'Q6N': 'MacBook Pro 15" (2017)',
    'Q6K': 'MacBook Pro 13" (2016)',
    'Q6M': 'MacBook Pro 15" (2016)',
    'QHC': 'MacBook Pro 13" M1 (2020)',
    'QH3': 'MacBook Pro 14" M1 Pro/Max (2021)',
    'QH4': 'MacBook Pro 16" M1 Pro/Max (2021)',
    'Q6F': 'MacBook Air 13" (2017)',
    'QH1': 'MacBook Air M1 (2020)',
  };

  const isValidSerial = (serial) => /^[A-Z0-9]{12}$/.test(serial);

  const decodeSerial = (serial) => {
    if (!isValidSerial(serial)) {
      throw new Error('Invalid serial number. Must be 12 characters long.');
    }

    // Check for first character to determine format
    const isNewFormat = !serial.startsWith('C02');
    
    let year, modelCode;

    if (isNewFormat) {
      // New format (like FVFJL0HC1WFV)
      const yearChar = serial[1]; // V in your case
      // New year mapping for modern Macs
      const yearMap = {
        'V': 2020, 'W': 2021, 'X': 2022, 'Y': 2023, 'Z': 2024
      };
      year = yearMap[yearChar] || 'Unknown';
      
      // Look for 'HC' in the serial which indicates M1 Air
      modelCode = serial.includes('HC') ? 'HC' : serial.slice(-3);
    } else {
      // Old C02 format
      const yearChar = serial[3];
      const yearMap = {
        'C': 2012, 'D': 2013, 'F': 2014, 'G': 2015, 'H': 2016, 'J': 2017,
        'K': 2018, 'L': 2019, 'M': 2020, 'N': 2021, 'P': 2022, 'Q': 2023,
      };
      year = yearMap[yearChar] || 'Unknown';
      modelCode = serial.slice(-4, -1);
    }

    const factoryLocation = factoryMap[serial[0]] || 'Unknown Location';
    const modelName = modelMap[modelCode] || 'Unknown Model';
    const manufactureDate = `${year}-01-01`;

    return {
      factoryLocation,
      manufactureDate,
      year,
      modelName
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setResult(null);

    try {
      const decoded = decodeSerial(serial.toUpperCase());
      setResult(decoded);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label 
            htmlFor="serial" 
            className="block text-sm font-medium text-gray-200 mb-2"
          >
            MacBook Serial Number
          </label>
          <input
            type="text"
            id="serial"
            value={serial}
            onChange={(e) => setSerial(e.target.value)}
            placeholder="Enter 12-character serial"
            className="w-full p-2 border rounded bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            maxLength={12}
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
          disabled={!serial}
        >
          Decode Serial
        </button>
      </form>

      {error && (
        <div className="mt-4 p-4 bg-red-900/50 border border-red-700 rounded text-red-200">
          {error}
        </div>
      )}

      {result && (
        <div className="mt-6 space-y-4">
          <div className="p-4 bg-green-900/50 border border-green-700 rounded text-green-200">
            Serial number decoded successfully!
          </div>
          
          <div className="bg-gray-800 rounded-lg p-4 space-y-2">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm text-gray-400">Model</h3>
                <p className="text-white">{result.modelName}</p>
              </div>
              <div>
                <h3 className="text-sm text-gray-400">Factory Location</h3>
                <p className="text-white">{result.factoryLocation}</p>
              </div>
              <div>
                <h3 className="text-sm text-gray-400">Manufacture Date</h3>
                <p className="text-white">{result.manufactureDate}</p>
              </div>
              <div>
                <h3 className="text-sm text-gray-400">Year</h3>
                <p className="text-white">{result.year}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MacGyver;