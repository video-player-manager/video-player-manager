import { ExtendedFluidPlayerOptions } from "@/types"

export const defaultValues: Partial<ExtendedFluidPlayerOptions> = {
  layoutControls: {
    primaryColor: "red",
    posterImage: "",
    posterImageSize: "contain",
    playButtonShowing: true,
    playPauseAnimation: true,
    fillToContainer: true,
    autoPlay: false,
    preload: "auto",
    mute: false,
    loop: false,
    keyboardControl: true,
    allowDownload: false,
    playbackRateEnabled: false,
    subtitlesEnabled: false,
    showCardBoardView: false,
    showCardBoardJoystick: false,
    allowTheatre: true,
    doubleclickFullscreen: true,
    theatreSettings: {
      width: "100%",
      height: "60%",
      marginTop: 0,
      horizontalAlign: "center",
    },
    theatreAdvanced: {
      classToApply: "",
      theatreElement: "",
    },
    title: undefined,
    logo: {
      imageUrl: null,
      position: "top left",
      clickUrl: null,
      opacity: 1,
      mouseOverImageUrl: null,
      imageMargin: "2px",
      hideWithControls: false,
      showOverAds: false,
    },
    controlBar: {
      autoHide: false,
      autoHideTimeout: 3,
      animated: true,
      playbackRates: ["x2", "x1.5", "x1", "x0.5"],
    },
    htmlOnPauseBlock: {
      html: null,
      height: null,
      width: null,
    },
    layout: "default",
    persistentSettings: {
      volume: true,
      quality: true,
      speed: true,
      theatre: true,
    },
    controlForwardBackward: {
      show: false,
      doubleTapMobile: true,
    },
    contextMenu: {
      controls: true,
      links: [],
    },
    miniPlayer: {
      enabled: true,
      width: 400,
      height: 225,
      widthMobile: 50,
      placeholderText: "Playing in Miniplayer",
      position: "bottom right",
      autoToggle: false,
    },
  },
  vastOptions: {
    adList: [],
    skipButtonCaption: "Skip ad in [seconds]",
    skipButtonClickCaption: 'Skip Ad <span class="skip_button_icon"></span>',
    adText: undefined,
    adTextPosition: "top left",
    adCTAText: "Visit now!",
    adCTATextPosition: "bottom right",
    adCTATextVast: false,
    adClickable: true,
    vastTimeout: 5000,
    showProgressbarMarkers: false,
    allowVPAID: false,
    showPlayButton: false,
    maxAllowedVastTagRedirects: 3,
  },
  captions: {
    play: "Play",
    pause: "Pause",
    mute: "Mute",
    unmute: "Unmute",
    fullscreen: "Fullscreen",
    exitFullscreen: "Exit Fullscreen",
  },
}
