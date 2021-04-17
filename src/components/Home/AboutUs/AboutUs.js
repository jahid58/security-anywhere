import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import experience from '../../../images/experience.jpg'
import history from '../../../images/history.jpg'
import mission from '../../../images/security 4.jpg'

const AboutUs = () => {
    const ourInfo = [
    {
        name:'Our Experience',
        img:experience,
        description:'Lorem pariatur in enim, ipsum tenetur deserunt nemo odio quibusdam omnis reiciendis dolores labore!Lorem ipsum dolor sit Voluptatum vitae soluta laboriosam, pariatur similique hic ea rem officia in enim, ipsum tenetur deserunt nemo odio quibusdam omnis reiciendis dolores labore!'
    },
    {
        name:'Our History',
        img:history,
        description:'Lorem ips adipisicing elit. pariatur similique hic ea rem officia in enim, ipsum tenetur deserunt nemo odio quibusdam omnis reiciendis dolores labore!Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatipsum tenetur deserunt nemo odio quibusdam omnis is dolores labore!'
    },
    {
        name:'Our Mission',
        img:mission,
        description:'Lorem ipsum do adipisicing elit. pariatur similique hic ea in enim, ipsum tenetur deserunt nemo odio quibusdam omnis reiciendis dolores labore!Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum vitae soluta laboriosam, odio quibusdam omnis reiciendis dolores labore!'
    }
    ]
    return (
        <div className=' bg_special text-center'>
              <h2 className='text-bluer'>About US</h2 >
            <div className='row'>
            {
                ourInfo.map(info => <InfoCard info={info}></InfoCard>)
            }
            </div>
        </div>
    );
};

export default AboutUs;