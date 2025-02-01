import React, { useState } from 'react';

const MacGyver = () => {
  const [serial, setSerial] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  // Production location codes - 2024 Updated Map
  const factoryMap = {
    'F': 'Fremont, California, USA',
    'FC': 'Fountain, Colorado, USA',
    'XA': 'USA',
    'XB': 'USA',
    'QP': 'USA',
    'G8': 'USA',
    'RN': 'Mexico',
    'CK': 'Cork, Ireland',
    'VM': 'Foxconn, Pardubice, Czech Republic',
    'SG': 'Singapore',
    'MB': 'Malaysia',
    'PT': 'Korea',
    'CY': 'Korea',
    'EE': 'Taiwan',
    'QT': 'Taiwan',
    'UV': 'Taiwan',
    'FK': 'Foxconn, Zhengzhou, China',
    'F1': 'Foxconn, Zhengzhou, China',
    'F2': 'Foxconn, Zhengzhou, China',
    'W8': 'Shanghai, China',
    'DL': 'Foxconn, China',
    'DM': 'Foxconn, China',
    'DN': 'Foxconn, Chengdu, China',
    'YM': 'Hon Hai/Foxconn, China',
    '7J': 'Hon Hai/Foxconn, China',
    '1C': 'China',
    '4H': 'China',
    'WQ': 'China',
    'F7': 'China',
    'C0': 'Tech Com, Quanta Computer Subsidiary, China',
    'C3': 'Foxconn, Shenzhen, China',
    'C7': 'Pentragon, Shanghai, China',
    'RM': 'Refurbished/remanufactured',
    'FV': 'Foxconn, Vietnam',
    'GY': 'Foxconn, Guangdong, China',
    'PD': 'Pudong, Shanghai, China',
    'VY': 'Foxconn, Vietnam'
  };

  // Year and half mapping
  const yearMap = {
    'C': { year: 2020, half: 'January–June (H1)' },
    'D': { year: 2020, half: 'July–December (H2)' },
    'F': { year: 2021, half: 'January–June (H1)' },
    'G': { year: 2021, half: 'July–December (H2)' },
    'H': { year: 2022, half: 'January–June (H1)' },
    'J': { year: 2022, half: 'July–December (H2)' },
    'K': { year: 2023, half: 'January–June (H1)' },
    'L': { year: 2023, half: 'July–December (H2)' },
    'M': { year: 2024, half: 'January–June (H1)' },
    'N': { year: 2024, half: 'July–December (H2)' },
    'P': { year: 2025, half: 'January–June (H1)' },
    'Q': { year: 2025, half: 'July–December (H2)' }
  };

  const isValidSerial = (serial) => {
    const cleanSerial = serial.trim().toUpperCase();
    return /^[A-Z0-9]{11,12}$/.test(cleanSerial);
  };

  const decodeSerial = (serial) => {
    if (!isValidSerial(serial)) {
      throw new Error('Invalid serial number. Must be 11-12 characters.');
    }

    const cleanSerial = serial.trim().toUpperCase();
    const yearCode = cleanSerial[3];
    const factoryCode = cleanSerial.slice(0, 2);

    // Check if year code exists
    if (!yearMap[yearCode]) {
      throw new Error('Unknown manufacturing year code: ' + yearCode);
    }

    const { year, half } = yearMap[yearCode];
    const factoryLocation = factoryMap[factoryCode] || 'Unknown Location';

    return {
      factoryLocation,
      manufacturePeriod: half,
      year,
      factoryCode // Include for reference
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setResult(null);

    try {
      const decoded = decodeSerial(serial);
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
            placeholder="Enter serial number"
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
          <div className="p-4 bg-gray-800/50 border border-gray-700 rounded">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <h3 className="text-sm text-gray-400">Manufacturing Period</h3>
                <p className="text-white">{result.manufacturePeriod}</p>
                <p className="text-white text-sm">{result.year}</p>
              </div>
              <div>
                <h3 className="text-sm text-gray-400">Factory Location</h3>
                <p className="text-white">{result.factoryLocation}</p>
                <p className="text-gray-400 text-sm">Code: {result.factoryCode}</p>
              </div>
            </div>
          </div>
          
          <div className="text-sm text-gray-400 mt-2">
            Note: Serial numbers only reveal manufacturing date and location. Model information cannot be reliably determined from serial numbers post-2010.
          </div>
        </div>
      )}
    </div>
  );
};

export default MacGyver;