(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{133:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return o}));var n=a(2),b=a(9),r=(a(0),a(186)),l={id:"player",title:"Player",sidebar_label:"Player"},c={id:"version-5.1.1/web/player",title:"Player",description:"GetDevices",source:"@site/versioned_docs/version-5.1.1/web/player.md",permalink:"/SpotifyAPI-NET/docs/web/player",editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/versioned_docs/version-5.1.1/web/player.md",version:"5.1.1",lastUpdatedBy:"dependabot-preview[bot]",lastUpdatedAt:1595319698,sidebar_label:"Player",sidebar:"version-5.1.1/someSidebar",previous:{title:"Personalization",permalink:"/SpotifyAPI-NET/docs/web/personalization"},next:{title:"Playlists",permalink:"/SpotifyAPI-NET/docs/web/playlists"}},p=[{value:"GetDevices",id:"getdevices",children:[]},{value:"GetPlayback",id:"getplayback",children:[]},{value:"GetPlayingTrack",id:"getplayingtrack",children:[]},{value:"TransferPlayback",id:"transferplayback",children:[]},{value:"ResumePlayback",id:"resumeplayback",children:[]},{value:"PausePlayback",id:"pauseplayback",children:[]},{value:"SkipPlaybackToNext",id:"skipplaybacktonext",children:[]},{value:"SkipPlaybackToPrevious",id:"skipplaybacktoprevious",children:[]},{value:"SeekPlayback",id:"seekplayback",children:[]},{value:"SetRepeatMode",id:"setrepeatmode",children:[]},{value:"SetVolume",id:"setvolume",children:[]},{value:"SetShuffle",id:"setshuffle",children:[]},{value:"AddToQueue",id:"addtoqueue",children:[]}],i={rightToc:p};function o(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"getdevices"},"GetDevices"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Get information about a user\u2019s available devices.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(r.b)("tbody",{parentName:"table"})),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Usage")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),"AvailabeDevices devices = _spotify.GetDevices();\ndevices.Devices.ForEach(device => Console.WriteLine(device.Name));\n")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"getplayback"},"GetPlayback"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Get information about the user\u2019s current playback state, including track, track progress, and active device.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[market]"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"An ISO 3166-1 alpha-2 country code. Provide this parameter if you want to apply Track Relinking."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},'"DE"'))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Usage")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),"PlaybackContext context = _spotify.GetPlayback();\nif(context.Item != null)\n  Console.WriteLine(context.Item.Name)); //Print the current song\n")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"getplayingtrack"},"GetPlayingTrack"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Get the object currently being played on the user\u2019s Spotify account.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[market]"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"An ISO 3166-1 alpha-2 country code. Provide this parameter if you want to apply Track Relinking."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},'"DE"'))))),Object(r.b)("p",null,"This is a simpler (less data) version of ",Object(r.b)("inlineCode",{parentName:"p"},"GetPlayback")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Usage")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),"PlaybackContext context = _spotify.GetPlayingTrack();\nif(context.Item != null)\n  Console.WriteLine(context.Item.Name)); //Print the current song\n")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"transferplayback"},"TransferPlayback"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Transfer playback to a new device and determine if it should start playing.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"deviceIds or deviceId"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A JSON array containing the ID of the device on which playback should be started/transferred"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},'"XXXX-XXXX-XXXX-XXXX"'))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"play"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true: ensure playback happens on new device, false: keep current playback state"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"true"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Usage")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'ErrorResponse error = _spotify.TransferPlayback("XXXX-XXXX-XXXX-XXXX");\n')),Object(r.b)("hr",null),Object(r.b)("h2",{id:"resumeplayback"},"ResumePlayback"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Start a new context or resume current playback on the user\u2019s active device.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[deviceId]"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The id of the device this command is targeting. If not supplied, the user's currently active device is the target."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},'"XXXX-XXXX-XXXX-XXXX"'))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"contextUri"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Spotify URI of the context to play"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},'"spotify:album:1Je1IMUlBXcx1Fz0WE7oPT"'))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"uris"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"An array of the Spotify track URIs to play."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},'new List<string> { "spotify:track:4iV5W9uYEdYUVa79Axb7Rh" }'))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"offset"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Indicates from where in the context playback should start. Only available when context_uri corresponds to an album or playlist object, or when the uris parameter is used."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"0"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Usage")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'ErrorResponse error = _spotify.ResumePlayback(uris: new List<string> { "spotify:track:4iV5W9uYEdYUVa79Axb7Rh" });\n')),Object(r.b)("hr",null),Object(r.b)("h2",{id:"pauseplayback"},"PausePlayback"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Pause playback on the user\u2019s account.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[deviceId]"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The id of the device this command is targeting. If not supplied, the user's currently active device is the target."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},'"XXXX-XXXX-XXXX-XXXX"'))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Usage")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),"ErrorResponse error = _spotify.PausePlayback();\n")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"skipplaybacktonext"},"SkipPlaybackToNext"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Skips to next track in the user\u2019s queue.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[deviceId]"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The id of the device this command is targeting. If not supplied, the user's currently active device is the target."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},'"XXXX-XXXX-XXXX-XXXX"'))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Usage")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),"ErrorResponse error = _spotify.SkipPlaybackToNext();\n")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"skipplaybacktoprevious"},"SkipPlaybackToPrevious"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Skips to previous track in the user\u2019s queue.\nNote that this will ALWAYS skip to the previous track, regardless of the current track\u2019s progress.\nReturning to the start of the current track should be performed using the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://api.spotify.com/v1/me/player/seek"}),"https://api.spotify.com/v1/me/player/seek")," endpoint.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[deviceId]"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The id of the device this command is targeting. If not supplied, the user's currently active device is the target."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},'"XXXX-XXXX-XXXX-XXXX"'))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Usage")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),"ErrorResponse error = _spotify.SkipPlaybackToPrevious();\n")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"seekplayback"},"SeekPlayback"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Seeks to the given position in the user\u2019s currently playing track.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"positionMs"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The position in milliseconds to seek to. Must be a positive number. Passing in a position that is greater than the length of the track will cause the player to start playing the next song."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"50"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[deviceId]"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The id of the device this command is targeting. If not supplied, the user's currently active device is the target."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},'"XXXX-XXXX-XXXX-XXXX"'))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Usage")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),"ErrorResponse error = _spotify.SeekPlayback(50);\n")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"setrepeatmode"},"SetRepeatMode"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Set the repeat mode for the user\u2019s playback. Options are repeat-track, repeat-context, and off.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"state"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"track, context or off."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"RepeatState.Track"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[deviceId]"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The id of the device this command is targeting. If not supplied, the user's currently active device is the target."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},'"XXXX-XXXX-XXXX-XXXX"'))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Usage")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),"ErrorResponse error = _spotify.SetRepeatMode(RepeatState.Track);\n")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"setvolume"},"SetVolume"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Set the volume for the user\u2019s current playback device.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"volumePercent"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Integer. The volume to set. Must be a value from 0 to 100 inclusive."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"50"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[deviceId]"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The id of the device this command is targeting. If not supplied, the user's currently active device is the target."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},'"XXXX-XXXX-XXXX-XXXX"'))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Usage")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),"ErrorResponse error = _spotify.SetVolume(50);\n")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"setshuffle"},"SetShuffle"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Toggle shuffle on or off for user\u2019s playback.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"shuffle"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"True or False"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"false"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[deviceId]"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The id of the device this command is targeting. If not supplied, the user's currently active device is the target."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},'"XXXX-XXXX-XXXX-XXXX"'))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Usage")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),"ErrorResponse error = _spotify.SetShuffle(false);\n")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"addtoqueue"},"AddToQueue"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Add an Item to the User's Playback Queue. BETA.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"uri"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The uri of the item to add to the queue. Must be a track or an episode uri."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"spotify:track:7zrCVKp6x0AtolOsn2iMif"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[deviceId]"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The id of the device this command is targeting. If not supplied, the user's currently active device is the target."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},'"XXXX-XXXX-XXXX-XXXX"'))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Usage")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'ErrorResponse error = _spotify.AddToQueue("spotify:track:7zrCVKp6x0AtolOsn2iMif");\n')))}o.isMDXComponent=!0},186:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return s}));var n=a(0),b=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var i=b.a.createContext({}),o=function(e){var t=b.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},O=function(e){var t=o(e.components);return b.a.createElement(i.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),O=o(a),u=n,s=O["".concat(l,".").concat(u)]||O[u]||j[u]||r;return a?b.a.createElement(s,c({ref:t},i,{components:a})):b.a.createElement(s,c({ref:t},i))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var i=2;i<r;i++)l[i]=a[i];return b.a.createElement.apply(null,l)}return b.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);