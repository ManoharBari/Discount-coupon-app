import React from 'react';
import { IndianRupee } from 'lucide-react';

const OrderInput = ({ orderAmount, setOrderAmount }) => (
    <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-2">
            Order Amount
        </label>
        <div className="relative">
            <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
                type="number"
                min="0"
                value={orderAmount}
                onChange={(e) => setOrderAmount(Math.max(0, Number(e.target.value)))}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter amount"
            />
        </div>
    </div>
);

export default OrderInput;
