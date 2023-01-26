import Image from 'next/image';
import image from '/public/assets/16.jpg';

const Banner = () => {
    return (
        <div>
            <h1>Banner</h1>
            <div className='flex justify-between'>
                <div className='w-[50%]'>
                    <Image src={image} />
                </div>
                <div className='w-[50%]'>
                    <h1 className='text-2xl'>Lorem ipsum dolor sit amet.</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus laudantium, sed sapiente debitis rem culpa nisi cumque veniam possimus officiis veritatis quod numquam, natus maiores accusantium consequatur provident, et dolor!</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;