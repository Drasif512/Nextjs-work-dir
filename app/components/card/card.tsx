import React from 'react';
import styles from './Card.module.css';
import Tag from "@/app/components/tag/tag"
import { CardPropes } from '@/app/types/componentsTypes';
function Card(props : CardPropes) {
  return (
    <div style={props.style} className="bg-white p-6 rouned-lg shadowed-md">
   {props.isDescription && <h2 className='text-2xt font-bold mb-2 '> {props.title}-{props.tag}</h2>}
    </div>
  )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
}

export default Card;