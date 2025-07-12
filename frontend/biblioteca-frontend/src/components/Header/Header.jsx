import React from 'react'
import { CiBookmarkPlus } from "react-icons/ci";

import { TbEdit } from "react-icons/tb";
import { RiDeleteBin2Line } from "react-icons/ri";
import './Header.scss';


export const Header = ({ onInserir, onEditar, onApagar }) => {
  return (
    <header className="header">
      <button className="inserir" onClick={onInserir}>
        <div className="imagem"><CiBookmarkPlus /></div>
        <p>Inserir</p>
      </button>

      <button className="editar" onClick={onEditar}>
        <div className="imagem2"><TbEdit /></div>
        <p>Editar</p>
      </button>

      <button className="apagar" onClick={onApagar}>
        <div className="imagem3"><RiDeleteBin2Line /></div>
        <p>Apagar</p>
      </button>
    </header>
  );
};

