'use client';

import React, { useEffect, useState } from "react";
import Titulo from "./Titulo";

export default function Seccion({ titulo = false, icon, cover = false, children, className, classTitulo, id}) {
    return (
        <section
            className={`
                ${className}
                h-auto
                w-full 
                p-2 sm:p-4
                flex 
                flex-col
                items-center 
                justify-center 
                rounded-xl 
                shadow-5xl 
                hover:shadow-6xl 
                transition-all duration-500 ease-in-out 
                transform 
                hover:scale-[1.03]
            `}
            id={id}
            >
            <div className={`text-white text-lg w-full flex flex-col gap-10 sm:gap-2 items-start justify-between flex-1 ${cover ? 'bg-gradient-to-t from-[rgba(3,7,18,0.5)]  via-[rgba(3,7,18,0.5)] to-[rgba(3,7,18,0.7)]' : ''}`}>
                {titulo && (
                    <Titulo
                        titulo={titulo}
                        className={classTitulo}
                        icon={icon}
                    />
                )}
                {children}
            </div>
        </section>
    );
}
