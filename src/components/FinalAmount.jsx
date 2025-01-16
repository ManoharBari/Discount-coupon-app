import React from 'react';

const FinalAmount = ({ finalAmount }) => (
    <div className="flex justify-between items-center border-t pt-4">
        <span className="font-medium text-gray-700">Final Amount:</span>
        <span className="text-2xl font-bold text-green-600">₹{finalAmount.toFixed(2)}</span>
    </div>
);

export default FinalAmount;
