import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import OrderInput from './components/OrderInput';
import AvailableCoupons from './components/AvailableCoupons';
import AppliedCoupon from './components/AppliedCoupon';
import FinalAmount from './components/FinalAmount';

const availableCoupons = [
  {
    code: "NEW001",
    isActive: true,
    minOrderAmount: 0,
    name: "New User Discount",
    type: "amount",
    validity: "2025-12-31T23:59:59.000Z",
    value: 600,
    _id: "675ead49bc7a2e5b28ec142a"
  },
  {
    code: "XMAS2024",
    isActive: true,
    minOrderAmount: 2000,
    name: "Christmas Celebration",
    type: "percentage",
    validity: "2024-12-25T23:59:59.000Z",
    value: 30,
    _id: "98774cc79f96b63d0d39c09d"
  },
  {
    code: "SUMMER50",
    isActive: true,
    minOrderAmount: 1500,
    name: "Summer Bonanza",
    type: "percentage",
    validity: "2024-07-31T23:59:59.000Z",
    value: 50,
    _id: "12345abc67890de123f456g7"
  },
  {
    code: "WINTER20",
    isActive: false,
    minOrderAmount: 500,
    name: "Winter Warmers",
    type: "percentage",
    validity: "2023-12-31T23:59:59.000Z",
    value: 20,
    _id: "23456bcd78901ef234g567h8"
  },
  {
    code: "LOYALTY10",
    isActive: true,
    minOrderAmount: 1000,
    name: "Loyalty Reward",
    type: "amount",
    validity: "2026-03-31T23:59:59.000Z",
    value: 100,
    _id: "34567cde89012fg345h678i9"
  },
  {
    code: "FESTIVE15",
    isActive: true,
    minOrderAmount: 800,
    name: "Festive Offer",
    type: "percentage",
    validity: "2024-11-15T23:59:59.000Z",
    value: 15,
    _id: "45678def90123gh456i789j0"
  },
  {
    code: "WELCOME100",
    isActive: true,
    minOrderAmount: 0,
    name: "Welcome Gift",
    type: "amount",
    validity: "2025-01-01T23:59:59.000Z",
    value: 100,
    _id: "56789efg01234hi567j890k1"
  },
  {
    code: "BLACKFRIDAY",
    isActive: true,
    minOrderAmount: 5000,
    name: "Black Friday Deal",
    type: "percentage",
    validity: "2024-11-29T23:59:59.000Z",
    value: 40,
    _id: "67890fgh12345ij678k901l2"
  }
];


const App = () => {
  const [orderAmount, setOrderAmount] = useState(0);
  const [selectedCoupon, setSelectedCoupon] = useState(null);
  const [applicableCoupons, setApplicableCoupons] = useState([]);

  useEffect(() => {
    const filtered = availableCoupons.filter((coupon) => orderAmount >= coupon.minOrderAmount);
    setApplicableCoupons(filtered);

    if (selectedCoupon && orderAmount < selectedCoupon.minOrderAmount) {
      setSelectedCoupon(null);
    }
  }, [orderAmount]);

  const calculateFinalAmount = () => {
    if (!selectedCoupon || orderAmount <= 0) return orderAmount;
    const discount =
      selectedCoupon.type === 'percentage'
        ? (orderAmount * selectedCoupon.value) / 100
        : selectedCoupon.value;
    return Math.max(0, orderAmount - discount);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <Header />
        <OrderInput orderAmount={orderAmount} setOrderAmount={setOrderAmount} />
        <AvailableCoupons
          applicableCoupons={applicableCoupons}
          selectedCoupon={selectedCoupon}
          setSelectedCoupon={setSelectedCoupon}
        />
        {selectedCoupon && (
          <AppliedCoupon selectedCoupon={selectedCoupon} setSelectedCoupon={setSelectedCoupon} />
        )}
        <FinalAmount finalAmount={calculateFinalAmount()} />
      </div>
    </div>
  );
};

export default App;
