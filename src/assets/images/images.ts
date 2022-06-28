import image1 from './1.jpg'
import image2 from './2.jpg'
import image3 from './3.jpg'
import image4 from './4.jpg'
import image5 from './5.jpg'
import image6 from './6.jpg'
import image7 from './7.jpg'
export type ImageType = Array<IInfoImage>
interface IInfoImage {
    image: string
    owner: IOwner
    nameImage:string
}
interface IOwner {
    name:string
    ava: string
}
export const images:ImageType = [
    {
        image: image1,
        owner: {
            name: 'John Doe',
            ava: 'Ava'
        },
        nameImage: 'Cat'
    }, {
        image: image2,
        owner: {
            name: 'Malefic',
            ava: 'Ava'
        },
        nameImage: 'Jellyfish'
    }, {
        image: image3,
        owner: {
            name: 'Hendrix',
            ava: 'Ava'
        },
        nameImage: 'Сat in a blanket'
    }, {
        image: image4,
        owner: {
            name: 'Nick',
            ava: 'Ava'
        },
        nameImage: 'House in the forest'
    }, {
        image: image5,
        owner: {
            name: 'Marry',
            ava: 'Ava'
        },
        nameImage: 'Snow forest'
    }, {
        image: image6,
        owner: {
            name: 'Tomas',
            ava: 'Ava'
        },
        nameImage: 'Dense forest'
    }, {
        image: image7,
        owner: {
            name: 'Olivia',
            ava: 'Ava'
        },
        nameImage: 'Snowy mountain peak'
    },
]