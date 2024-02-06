import axios from 'axios'

export class ProductsDatas{
    getData(){
        axios.get('./data.json').then((result) => {
            console.log(result);
            return result.data;
        });
    }
}