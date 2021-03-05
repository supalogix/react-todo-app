import React from "react"
import { connectAdvanced } from "react-redux"

export const FetchingData = (props) => <div className="border border-gray-100 w-full max-w-lg min-h-495px rounded-2xl flex flex-col justify-center items-center">
    <h1 className="text-gray-400 text-lg font-medium mb-5">Fetching Data</h1>
    <svg width="58" height="58" viewBox="0 0 58 58" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fill-rule="evenodd">
            <g transform="translate(2 1)" stroke="#A1A1AA" stroke-width="1.5">
                <circle cx="42.601" cy="11.462" r="5" fill-opacity="1" fill="#A1A1AA">
                    <animate attributeName="fill-opacity"
                             begin="0s" dur="2s"
                             values="1;0;0;0;0;0;0;0" calcMode="linear"
                             repeatCount="indefinite" />
                </circle>
                <circle cx="49.063" cy="27.063" r="5" fill-opacity="0" fill="#A1A1AA">
                    <animate attributeName="fill-opacity"
                             begin="0s" dur="2s"
                             values="0;1;0;0;0;0;0;0" calcMode="linear"
                             repeatCount="indefinite" />
                </circle>
                <circle cx="42.601" cy="42.663" r="5" fill-opacity="0" fill="#A1A1AA">
                    <animate attributeName="fill-opacity"
                             begin="0s" dur="2s"
                             values="0;0;1;0;0;0;0;0" calcMode="linear"
                             repeatCount="indefinite" />
                </circle>
                <circle cx="27" cy="49.125" r="5" fill-opacity="0" fill="#A1A1AA">
                    <animate attributeName="fill-opacity"
                             begin="0s" dur="2s"
                             values="0;0;0;1;0;0;0;0" calcMode="linear"
                             repeatCount="indefinite" />
                </circle>
                <circle cx="11.399" cy="42.663" r="5" fill-opacity="0" fill="#A1A1AA">
                    <animate attributeName="fill-opacity"
                             begin="0s" dur="2s"
                             values="0;0;0;0;1;0;0;0" calcMode="linear"
                             repeatCount="indefinite" />
                </circle>
                <circle cx="4.938" cy="27.063" r="5" fill-opacity="0" fill="#A1A1AA">
                    <animate attributeName="fill-opacity"
                             begin="0s" dur="2s"
                             values="0;0;0;0;0;1;0;0" calcMode="linear"
                             repeatCount="indefinite" />
                </circle>
                <circle cx="11.399" cy="11.462" r="5" fill-opacity="0" fill="#A1A1AA">
                    <animate attributeName="fill-opacity"
                             begin="0s" dur="2s"
                             values="0;0;0;0;0;0;1;0" calcMode="linear"
                             repeatCount="indefinite" />
                </circle>
                <circle cx="27" cy="5" r="5" fill-opacity="0" fill="#A1A1AA">
                    <animate attributeName="fill-opacity"
                             begin="0s" dur="2s"
                             values="0;0;0;0;0;0;0;1" calcMode="linear"
                             repeatCount="indefinite" />
                </circle>
            </g>
        </g>
    </svg>
</div>

export default connectAdvanced(dispatch => state => ({}))(FetchingData)