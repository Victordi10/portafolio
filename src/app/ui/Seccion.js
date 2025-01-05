'use client';

import React, { useEffect, useState } from "react";
import Titulo from "./Titulo";

export default function Seccion({ titulo = false, children, className, classTitulo }) {
    return (
        <section
            className={`
                ${className}
                h-auto
                p-2 sm:p-6 
                w-full 
                flex 
                flex-col
                m-1 
                items-center 
                justify-center 
                rounded-xl 
                shadow-xl 
                hover:shadow-2xl 
                transition-all duration-500 ease-in-out 
                transform 
            `}>
            {titulo && (
                <Titulo
                    titulo={titulo}
                    className={classTitulo}
                />
            )}
            <div className="text-white text-lg">{children}</div>
        </section>
    );
}
