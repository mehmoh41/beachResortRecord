import React ,{useContext} from 'react';
import {RoomContext} from '../context';
import Title from './Title';
// get all unique values
const getUnique = (items , value)   => {
    return [...new Set(items.map(item => {
        return item[value]
    }))]
}

const RoomFilter = ({rooms}) => {
    const context = useContext(RoomContext);
    const { capacity , handleChange , type , price , minPrice , maxSize, minSize , maxPrice , breakfast , pets} = context;
    // get unique types
    let types = getUnique(rooms , 'type');
    // add all 
    types = ['all' , ...types];
    //  map to jsx
    types = types.map((item , index) => {
        return <option key={index} value={item}>{item}</option>
    })
// getting number of guests
let people = getUnique(rooms , 'capacity');
people = people.map((item , index) => {
    return <option  key={index} value={item}>{item}</option>
})

        return (
            <section className='filter-container'>
                <Title title='search rooms' />
                <form className='filter-form'>
                    {/* select inputs */}
                    <div className='form-group'>
                        <label htmlFor='type'>room type</label>
                        <select name='type' id='type' value={type} className='form-control' onChange={handleChange}>
                            {types}
                        </select>
                    </div>
                    {/* end ing select */}
                    {/* guest select inputs */}
                    <div className='form-group'>
                        <label htmlFor='capacity'>Guest</label>
                        <select name='capacity' id='capacity' value={capacity } className='form-control' onChange={handleChange}>
                            {people} 
                        </select>
                    </div>
                    {/* ending guest select */}
                    {/* input with price */}
                    <div className='form-group'>
                        <label htmlFor='price'>
                            room price ${price}
                        </label>
                        <input type='range' name='price' min={minPrice} max={maxPrice} id={price} value={price} onChange={handleChange} className='form-control' />
                    </div>
                    {/* ending price secion */}
                    {/* size */}
                    <div className="form-group">
                        <label htmlFor="size">room size</label>
                        <div className='size-inputs'>
                            <input type='number' name='minSize' id='size' value={minSize} onChange={handleChange} className='size-input'/>
                            <input type='number' name='maxSize' id='size' value={maxSize} onChange={handleChange} className='size-input'/>
                        </div>
                    </div>
                    {/* end of size */}
                    {/* extras */}
                    <div className="form-group">
                        <div className='single-extra'>
                            <input type='checkbox' name='breakfast' id='breakfast' checked={breakfast} onChange={handleChange}/>
                        <label htmlFor='breakfast'>breakfast</label>
                        </div>
                    
                    <div className='single-extra'>
                            <input type='checkbox' name='pets' id='pets' checked={pets} onChange={handleChange}/>
                        <label htmlFor='pets'>pets</label>
                        </div>
                    
                    {/* end of extras */}
                    </div>
                </form>
            </section>
                  );
                          };

export default RoomFilter;
