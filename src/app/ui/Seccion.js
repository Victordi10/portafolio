'use client';

import React, { useEffect, useState } from "react";
import Titulo from "./Titulo";

export default function Seccion({ titulo = false, cover = false, children, className, classTitulo }) {
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
            <div className={`text-white text-lg w-full flex-1 ${cover ? 'bg-gradient-to-t from-[rgba(3,7,18,0.5)]  via-[rgba(3,7,18,0.5)] to-[rgba(3,7,18,0.7)]' : ''}`}>
                {titulo && (
                    <Titulo
                        titulo={titulo}
                        className={classTitulo}
                    />
                )}
                {children}
            </div>
        </section>
    );
}
