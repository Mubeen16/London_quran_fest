import React from 'react';

const Rules: React.FC = () => {
    return (
        <div className="bg-gray-50 min-h-screen pb-20 pt-32 md:pt-40">
            <div className="text-center pb-8">
                <div className="max-w-3xl mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6 tracking-tight">
                        London Qur'an Fest <span className="text-secondary">2026</span> Rules
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed font-light">
                        Kindly go through the following instructions carefully so that we can avoid any setbacks during the competition:
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-8">

                    {/* Section 1 */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10 transition-shadow hover:shadow-md">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-lg">1</span>
                            <h2 className="text-2xl font-bold text-gray-900 m-0">Competition Rounds & Structure</h2>
                        </div>
                        <ul className="space-y-4 text-gray-600 leading-relaxed">
                            <li className="flex gap-3">
                                <span className="text-primary mt-1">•</span>
                                <span>The Preliminary Round will be conducted online via Zoom. Participants must ensure that the Zoom application is downloaded and installed on their device before the competition.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-primary mt-1">•</span>
                                <span>The Final Round will be conducted physically at the designated venue. Further details regarding the venue and schedule will be shared with qualified participants in due course.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-primary mt-1">•</span>
                                <span>Spaces are allocated strictly on a first come first serve basis. Registration for each level will be closed before the deadline on reaching the maximum number of participants for that level.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Section 2 */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10 transition-shadow hover:shadow-md">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-lg">2</span>
                            <h2 className="text-2xl font-bold text-gray-900 m-0">Zoom & Online Guidelines</h2>
                        </div>
                        <ul className="space-y-4 text-gray-600 leading-relaxed">
                            <li className="flex gap-3">
                                <span className="text-primary mt-1">•</span>
                                <span>Only the participants will be allowed into the Zoom meeting one at a time. A separate YouTube link will be provided for parents and others to view the competition.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-primary mt-1">•</span>
                                <span>Individual time slots and Zoom + YouTube links will be emailed to all participants three days before the competition. If you have not received these, please contact us immediately.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-primary mt-1">•</span>
                                <span>It is very important that participants log into the Zoom meeting at the beginning of their allocated time slot. Participants have to remain in the Zoom waiting room and will only be allowed into the meeting by the moderator one at a time for their turn only. You will be seeing a message similar to below on your Zoom until the moderator lets you into the meeting.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-primary mt-1">•</span>
                                <span>The Zoom participant display name must match the participant registered name (for example, if you have registered your child as Misbah Shahul, your Zoom display name should be Misbah Shahul). This is for correct identification and smooth running of the competition.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-primary mt-1">•</span>
                                <span><strong>Switching on your video is mandatory</strong>, otherwise the participant will be disqualified from the competition. Please remove any virtual background from your Zoom video.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-primary mt-1">•</span>
                                <span>Elder female students are required to wear a niqab that covers their face.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Section 3 */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10 transition-shadow hover:shadow-md">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-lg">3</span>
                            <h2 className="text-2xl font-bold text-gray-900 m-0">Recitation & Evaluation Format</h2>
                        </div>
                        <ul className="space-y-4 text-gray-600 leading-relaxed">
                            <li className="flex gap-3">
                                <span className="text-primary mt-1">•</span>
                                <span>The competition for each level will be for a total duration of 1.5-2 hours. Each participant has been provided with a time slot within this duration and must join on the Zoom link at the start of the given time. Each participant will then be allowed into the meeting one at a time upon their turn.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-primary mt-1">•</span>
                                <span>We highly recommend the participant to be alone in a separate quiet room during their recitation to avoid any distractions and to ensure clarity.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-primary mt-1">•</span>
                                <span>Prompting or helping the participant in any manner will not be entertained and will result in immediate disqualification of the participant.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-primary mt-1">•</span>
                                <div>
                                    <span>Participants will be asked questions by a panel of expert judges in a child friendly and age appropriate manner. Questions can be asked in any of the following 2 ways:</span>
                                    <ul className="mt-3 space-y-2 ml-4">
                                        <li className="flex gap-2 text-gray-500"><span className="text-gray-400">i)</span> The name of a Surah will be given and the participants will be asked to recite it.</li>
                                        <li className="flex gap-2 text-gray-500"><span className="text-gray-400">ii)</span> A random ayah from a Surah will be recited by the judge and the participant will be asked to continue.</li>
                                    </ul>
                                </div>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-primary mt-1">•</span>
                                <span>The time allotted per participant for each level is as follows: <strong className="text-gray-800">Level 1 & 2:</strong> 3-4 minutes. <strong className="text-gray-800">Level 3 & 4:</strong> 5-6 minutes.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-primary mt-1">•</span>
                                <span>The majority of the marks will be awarded based on Hifz proficiency and accurate recitation with proper Tajweed. A smaller percentage will be allocated for Maqamat (melodic rendition) and overall presentation. A detailed breakdown of the marking criteria will be shared via email prior to the competition.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Section 4 */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10 transition-shadow hover:shadow-md">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-lg">4</span>
                            <h2 className="text-2xl font-bold text-gray-900 m-0">Important Conditions & Technical Requirements</h2>
                        </div>
                        <ul className="space-y-4 text-gray-600 leading-relaxed">
                            <li className="flex gap-3">
                                <span className="text-primary mt-1">•</span>
                                <span>All instructions and procedure will be discussed at the beginning of each level competition so it is necessary for all parents to be listening in on the YouTube link at the start of their respective level.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-primary mt-1">•</span>
                                <span>Please make sure you test your Zoom voice and video (microphone and webcam) prior to the competition to avoid any technical complications on the day.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-primary mt-1">•</span>
                                <span>If participants face any technical challenges during the competition, we request you to please leave and re-join the meeting in order to save any delay for other participants.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-primary mt-1">•</span>
                                <span>If you are shortlisted for the final round but unable to attend in person, you will be disqualified and the participant with the next highest marks will be selected.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-primary mt-1">•</span>
                                <span>If you require any support before or during the competition, please contact our support team.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Note Box */}
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-xl p-6 shadow-sm mt-8">
                        <div className="flex items-center gap-3">
                            <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                            </svg>
                            <span className="text-yellow-800 font-medium text-lg">Note</span>
                        </div>
                        <p className="mt-2 text-yellow-800 ml-9">
                            Judges' decision will be final.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Rules;
