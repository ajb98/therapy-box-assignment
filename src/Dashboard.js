import React from 'react';
import {TitleSection} from './functionLibrary';
import './App.css';

function Dashboard(){
    return(
        <div>
            <div>
                {TitleSection("Good Day Swapnil")}
            </div>
            <div style={{textAlign: 'center'}}>
                <div style={{width: '1500px', textAlign: 'center', display: 'inline-block'}}>
                    {dashboardObjectPreview('Weather')}
                    {dashboardObjectPreview('News')}
                    {dashboardObjectPreview('Sport')}
                    {dashboardObjectPreview('Photos')}
                    {dashboardObjectPreview('Tasks')}
                    {dashboardObjectPreview('Clothes')}
                </div> 
            </div>
        </div>
    );
}

function dashboardObjectPreview(title){
    return(
        <div class="dashboard-object" style={{height: '248px', width: '337px', display: 'inline-block', margin: '50px'}}>
            <div style={{padding: '15px 0px', textAlign: 'center', width: '100%', fontSize: '23px', fontWeight: 'bold'}}>{title}</div>
            <div>The Content</div>
        </div>
    );
}

export default Dashboard;