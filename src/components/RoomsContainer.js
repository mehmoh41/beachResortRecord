import React , {} from 'react';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import {withRoomConsumer} from '../context'; 
import Loading from './Spinner';

function RoomContainer({context}) {
const{loading , sortedRooms , rooms} = context;
                            
                    if(loading) {
                        return <Loading />
                    }
                    return (
                    <>
                        <RoomFilter rooms={rooms} />
                        <RoomList rooms={sortedRooms}/>
                    </>
                    )
                }
            

export default withRoomConsumer(RoomContainer);


// import React , {} from 'react';
// import RoomFilter from './RoomFilter';
// import RoomList from './RoomList';
// import {RoomConsumer} from '../context';
// import Loading from './Spinner';

// const RoomsContainer = () => {
//     return (
//         <RoomConsumer>
//             {
//                 value => {
//                     const {sortedRooms , rooms , loading} = value
//                     if(loading) {
//                         return <Loading />
//                     }
//                     return (
//                     <div>
//                         hello from rooms container
//                         <RoomFilter rooms={rooms} />
//                         <RoomList rooms={sortedRooms}/>
//                     </div>
//                     )
//                 }
//             }
//         </RoomConsumer>
        
//     );
// };

// export default RoomsContainer;
