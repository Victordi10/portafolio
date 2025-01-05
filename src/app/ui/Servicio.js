'use client';

import React from "react";

export default function Servicio({ titulo }) {
    return (
        <div className="flex items-center p-2 justify-center bg-gray-800 rounded-lg shadow-md w-full sm:w-[45%] lg:w-[30%]">
            <h3 className="text-xl font-semibold text-indigo-500">{titulo}</h3>
          </div>

    );
}
