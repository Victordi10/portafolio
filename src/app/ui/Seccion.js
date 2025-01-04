'use client';

import React, {useEffect, useState} from "react";
import Titulo from "./Titulo";

export default function Seccion({ titulo = false, children }) {
    return (
        <section className="bg-gray-800 p-4 w-full flex flex-col m-1 items-center justify-center">
            {titulo && <Titulo titulo={titulo} />}
            <div>{children}</div>
        </section>
    );
}