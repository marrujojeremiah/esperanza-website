import React from 'react';

const Careers = () => {
    console.log('Careers component rendered');
    return (
        <section id="careers" className="careers-section">
            <h2>Career</h2>
            <div className="careers-content">
                <h3>Job Title: Direct Support Staff (DSS) or Direct Support Professional (DSP)</h3>
                <p><strong>Duties:</strong></p>
                <p>
                    Direct Support employees support EHOH clients to achieve their desired quality of life and ensure optimal health and safety, provide prescribed support and supervision, assist clients to be as independent as possible, and to maintain the home so they are clean, safe, and hazard free.
                </p>
                <p>
                    Direct Support employees assist clients in maintaining safe and healthy lifestyles, and monitor changes in their general health, appearance, behavior, and patterns of activities. Responsible for preparing meals and for assisting clients with personal hygiene skills and tasks, including assisting with bathroom responsibilities, ensuring clients complete shaving, brushing teeth, bathing/showering, shampooing, and dressing appropriately for the weather and type of activities. Complete paperwork, as necessary, to meet, federal, and state regulatory requirements. Complete required, on-going training requirements within EHOH and state required timeframes and meeting regional requirements. Safely transport clients to and from recreational activities, errands, work, and personal appointments. Housecleaning duties including laundry, vacuuming, cleaning showers, tubs, dishes, taking out trash, yard work, mowing lawn and gardening.
                </p>
                <p><strong>Requirements:</strong></p>
                <ul>
                    <li>High school diploma, or equivalent</li>
                    <li>1 year or more experience working with adults with Disabilities</li>
                    <li>Must pass criminal background check *</li>
                    <li>Must be at least 18 years of age</li>
                    <li>Basic fluency in oral and written English</li>
                    <li>First aid CPR Certified preferred</li>
                </ul>
                <p>
                    * All convictions other than minor traffic offenses must be disclosed. Some convictions are disqualifying, especially those related to robbery, rape and other sexual offenses, child abuse, elder or dependent adult abuse, arson or kidnapping.
                </p>
                <h3>Contact</h3>
                <form className="resume-form" action="mailto:sabrina@ehoharf.com" method="post" encType="multipart/form-data">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="resume">Upload Resume:</label>
                    <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" required />

                    <button type="submit">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default Careers;
