import React, { useState, useEffect } from 'react';
import { Title, SubTitle } from '../components/commons/Titles.jsx';
import Categories from '../components/content/Categories.jsx';
import Projects from '../components/content/Projects.jsx';
import { getFetchData } from '../util/fetch.js';
import { use } from 'react';

export default function Work() {
    const [category, setCategory] = useState([]);
    const [projects, setProjects] = useState([]);
    useEffect(()=>{
        const fetchData = async() => {
            const jasonData = await getFetchData("/content/work");
            setCategory(jasonData.result.categories);
            setProjects(jasonData.result.projects);
        }
        fetchData();
    }, []);

    return (
        <section id="work" className="section container">
            <Title title="My Work" />
            <SubTitle subTitle="Projects" />
            <Categories categories={category} />
            <Projects   projects={projects}  />
        </section>
    );
}


