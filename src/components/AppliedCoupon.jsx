import React from 'react';
import { X } from 'lucide-react';

const AppliedCoupon = ({ selectedCoupon, setSelectedCoupon }) => (
    <div className="bg-gray-50 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
            <span className="font-medium text-gray-700">Applied Coupon:</span>
            <div className="flex items-center gap-2">
                <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                    {selectedCoupon.code}
                </span>
                <button
                    onClick={() => setSelectedCoupon(null)}
                    className="text-gray-400 hover:text-gray-600"
                >
                    <X className="w-4 h-4" />
                </button>
            </div>
        </div>
    </div>
);

export default AppliedCoupon;
