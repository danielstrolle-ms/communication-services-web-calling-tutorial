import React from "react";
import { Icon } from '@fluentui/react/lib/Icon';

export default class IncomingCallCard extends React.Component {
    constructor(props) {
        super(props);
        this.incomingCall = props.incomingCall;
        this.acceptCallMicrophoneUnmutedVideoOff = props.acceptCallMicrophoneUnmutedVideoOff;
        this.acceptCallMicrophoneUnmutedVideoOn = props.acceptCallMicrophoneUnmutedVideoOn;
        this.acceptCallMicrophoneMutedVideoOn = props.acceptCallMicrophoneMutedVideoOn;
        this.acceptCallMicrophoneMutedVideoOff = props.acceptCallMicrophoneMutedVideoOff;
    }

    render() {
        return (
            <div className="ms-Grid mt-2">
                <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-lg6">
                        <h2>Incoming Call...</h2>
                    </div>
                    <div className="ms-Grid-col ms-lg6 text-right">
                        {
                            this.call &&
                            <h2>Call Id: {this.state.callId}</h2>
                        }
                    </div>
                </div>
                <div className="custom-row">
                    <div className="ringing-loader mb-4"></div>
                </div>
                {this.incomingCall?.customContext &&
                    <>
                        <div className="ms-Grid-row">
                            <div className="ms-Grid-col ms-lg6">
                                <h3 className="mb-0">Custom context:</h3>
                            </div>
                        </div>
                        {this.incomingCall.customContext.userToUser &&
                            <div className="ms-Grid-row">
                                <div className="ms-Grid-col ms-lg6">
                                    UUI: {this.incomingCall.customContext.userToUser}
                                </div>
                            </div>
                        }
                        {this.incomingCall.customContext.xHeaders && this.incomingCall.customContext.xHeaders
                            .map(header => 
                                <div className="ms-Grid-row">
                                    <div className="ms-Grid-col ms-lg6">
                                        {header.key}: {header.value}
                                    </div>
                                </div>)
                        }
                    </>
                }
                <div className="ms-Grid-row text-center">
                    <span className="incoming-call-button"
                        title={'Answer call with microphone unmuted and video off'}
                        onClick={async () => {
                            this.incomingCall.accept(await this.acceptCallMicrophoneUnmutedVideoOff());
                            this.props.onReject();
                        }}>
                        <Icon iconName="Microphone"/>
                        <Icon iconName="VideoOff"/>
                    </span>
                    <span className="incoming-call-button"
                        title={'Answer call with microphone unmuted and video on'}
                        onClick={async () => {
                            this.incomingCall.accept(await this.acceptCallMicrophoneUnmutedVideoOn());
                            this.props.onReject();
                        }}>
                        <Icon iconName="Microphone"/>
                        <Icon iconName="Video"/>
                    </span>
                    <span className="incoming-call-button"
                        title={'Answer call with microphone muted and video on'}
                        onClick={async () => {
                            this.incomingCall.accept(await this.acceptCallMicrophoneMutedVideoOn());
                            this.props.onReject();
                        }}>
                        <Icon iconName="MicOff"/>
                        <Icon iconName="Video"/>
                    </span>
                    <span className="incoming-call-button"
                        title={'Answer call with microphone muted and video off'}
                        onClick={async () => {
                            this.incomingCall.accept(await this.acceptCallMicrophoneMutedVideoOff());
                            this.props.onReject();
                        }}>
                        <Icon iconName="MicOff"/>
                        <Icon iconName="VideoOff"/>
                    </span>
                    <span className="incoming-call-button"
                        title={'Reject call'}
                        onClick={() => { this.incomingCall.reject(); this.props.onReject(); }}>
                        <Icon iconName="DeclineCall"/>
                    </span>
                </div>
            </div>
        );
    }
}