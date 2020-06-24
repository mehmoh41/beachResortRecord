import React, {Component} from 'react';
// import items from './data';
import Client from './contentful';
const RoomContext = React.createContext();

class RoomProvider extends Component {
    // provider allows all component in component tree to access it
    //consumer used to access the information supplied by the provider
    state = {
            rooms : [],
            sortedRooms : [],
            featuredRooms : [],
            loading : true,
            type : 'all',
            capacity : 1,
            price : 0,
            minPrice : 0,
            maxPrice : 0,
            maxSize : 0,
            minSize : 0,
            breakfast : false , 
            pets : false
    }

    // getData
    getData = async() => {
        try {
            let response  = await Client.getEntries({
                content_type : "beachResortRoom",
                // order: 'fields.price'
                // order : 'fields.price'
            });
            let rooms = this.formatData(response.items);
            let maxPrice = Math.max(...rooms.map(item => {
                return item.price
            }));
            let maxSize = Math.max(...rooms.map(item => {
                return item.size
            }));
            let featuredRooms = rooms.filter(room => {
                return room.featured === true
            })
            this.setState({
                rooms , 
                featuredRooms,
                sortedRooms: rooms ,
                 loading:false,
                 maxPrice,
                 maxSize 
                })
            console.log(rooms)

        }
        catch(error) {
            console.log(error);
        }
    }
    componentDidMount() {
        this.getData();
    }
    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => {
                return image.fields.file.url
            });
                let room = {...item.fields , images,id};
                return room;
            });
        return tempItems;

    }
    getRoom  = (slug) => {
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find(room => {
            return room.slug === slug
        })
        return room;
    }

    handleChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;    
        const name = e.target.name;
        this.setState({
            [name] : value ,  
        }, this.filterRooms
        )
    }
    filterRooms = () => {
        let {price,rooms , type , capacity , minSize , maxSize,  breakfast , pets} = this.state;
        // all the rooms
        let tempRooms = [...rooms];
// transform value
capacity = parseInt(capacity);
price = parseInt(price);
// filter by type
        if(type !== 'all') {
            tempRooms = tempRooms.filter(room => room.type === type) 
        }
        // filter for capacity
         if(capacity !== 1) {
                tempRooms = tempRooms.filter(room => room.capacity >= capacity)
            }
            // filter by price
            tempRooms = tempRooms.filter(room => {
                return room.price <= price
            })
        
            // filter by size
            tempRooms = tempRooms.filter(room => 
               room.size >=  minSize && room.size <= maxSize
            )
            // filter by breakfast


            if(breakfast) {
                tempRooms = tempRooms.filter(room => room.breakfast === true)
            }
            // filter by pets
            if(pets) {
                tempRooms = tempRooms.filter(room => room.pets === true)
            }

        //change state    
        this.setState({
            sortedRooms : tempRooms
        })
    }
    render() {
        return (
             <RoomContext.Provider value={{...this.state, getRoom : this.getRoom , handleChange : this.handleChange}}>{this.props.children }</RoomContext.Provider>
        );
    }
}
const RoomConsumer = RoomContext.Consumer;
export function withRoomConsumer(Component){
    return function ConsumerWrapper(props) {
        return <RoomConsumer>
            {value => <Component {...props} context={value}/>}
        </RoomConsumer>
    }
}
export {RoomProvider , RoomConsumer , RoomContext};
// provider allows all component in componnetn tree to access it
//consumer used to access the information supplied by the provider
