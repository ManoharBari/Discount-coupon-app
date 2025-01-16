import React from 'react';
import { Percent } from 'lucide-react';

const AvailableCoupons = ({ applicableCoupons, selectedCoupon, setSelectedCoupon }) => (
    <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Available Coupons</h2>
        {applicableCoupons.length > 0 ? (
            <div className="grid gap-4">
                {applicableCoupons.map((coupon) => (
                    <button
                        key={coupon.id}
                        onClick={() => setSelectedCoupon(coupon)}
                        className={`flex items-center justify-between p-4 border rounded-lg transition-all ${selectedCoupon?.id === coupon.id
                            ? 'border-indigo-500 bg-indigo-50'
                            : 'border-gray-200 hover:border-indigo-300 hover:bg-gray-50'
                            }`}
                    >
                        <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center w-10 h-10 bg-indigo-100 rounded-full">
                                <Percent className="w-5 h-5 text-indigo-600" />
                            </div>
                            <div className='flex flex-col items-start'>
                                <h3 className="font-medium text-gray-800">{coupon.name}</h3>
                                <p className="text-sm text-gray-800">{coupon.code}</p>
                                <p className="text-sm text-gray-500">
                                    {coupon.type === 'percentage'
                                        ? `${coupon.value}% off`
                                        : `₹${coupon.value} off`}
                                </p>
                            </div>
                        </div>
                        <span className="text-sm text-gray-500">
                            Min. order: ₹{coupon.minOrderAmount}
                        </span>
                    </button>
                ))}
            </div>
        ) : (
            <div className="text-center py-8 bg-gray-50 rounded-lg">
                <p className="text-gray-500">No coupons available for this amount.</p>
            </div>
        )}
    </div>
);

export default AvailableCoupons;
