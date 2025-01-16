import React from 'react';
import { Tag } from 'lucide-react';

const Header = () => (
    <div className="flex items-center gap-2 mb-8">
        <Tag className="w-6 h-6 text-indigo-600" />
        <h1 className="text-2xl font-bold text-gray-800">Discount Calculator</h1>
    </div>
);

export default Header;
