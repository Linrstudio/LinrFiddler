﻿import System;
import System.Windows.Forms;
import Fiddler;

// INTRODUCTION
// This is the FiddlerScript Rules file, which creates some of the menu commands and
// other features of Fiddler. You can edit this file to modify or add new commands.
//
// The original version of this file is named SampleRules.js and it is in the
// \Program Files\Fiddler\ folder. When Fiddler first starts, it creates a copy named
// CustomRules.js inside your \Documents\Fiddler2\Scripts folder. If you make a 
// mistake in editing this file, simply delete the CustomRules.js file and restart
// Fiddler. A fresh copy of the default rules will be created from the original
// sample rules file.

// GLOBALIZATION NOTE:
// Be sure to save this file with UTF-8 Encoding if using any non-ASCII characters
// in strings, etc.

// JScript Reference
// http://www.fiddler2.com/redir/?id=msdnjsnet
//
// FiddlerScript Reference
// http://www.fiddler2.com/redir/?id=fiddlerscriptcookbook
//
// FiddlerScript Editor: 
// http://www.fiddler2.com/redir/?id=fiddlerscripteditor

class Handlers
{
    // The following snippet demonstrates a custom-bound column for the web sessions list.
    // See http://www.fiddler2.com/fiddler/help/configurecolumns.asp for more info
    // public static BindUIColumn("Method", 60)
    // function FillMethodColumn(oS: Session){
    //  if ((oS.oRequest != null) && (oS.oRequest.headers != null))
    //  return oS.oRequest.headers.HTTPMethod; else return String.Empty;
    //}

    public static RulesOption("Hide 304s")
    var m_Hide304s: boolean = false;

    // Cause Fiddler to override the Accept-Language header with one of the defined values
    public static RulesOption("Request &Japanese Content")
    var m_Japanese: boolean = false;	

    // Automatic Authentication
    public static RulesOption("&Automatically Authenticate")
    var m_AutoAuth: boolean = false;

    // Cause Fiddler to override the User-Agent header with one of the defined values
    RulesString("&User-Agents", true) 
    RulesStringValue(0,"Netscape &3", "Mozilla/3.0 (Win95; I)")
    RulesStringValue(1,"WinPhone7", "Mozilla/4.0 (compatible: MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0; SAMSUNG; SGH-i917)")
    RulesStringValue(2,"WinPhone7.5", "Mozilla/5.0 (compatible: MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0; SAMSUNG; SGH-i917)")
    RulesStringValue(3,"&Safari5 (Win7)", "Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1")
    RulesStringValue(4,"Safari6 (Mac)", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8) AppleWebKit/536.25 (KHTML, like Gecko) Version/6.0 Safari/536.25")
    RulesStringValue(5,"iPad", "Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25")
    RulesStringValue(6,"iPhone6", "Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A405 Safari/8536.25")
    RulesStringValue(7,"IE &6 (XPSP2)", "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1)")
    RulesStringValue(8,"IE &7 (Vista)", "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; SLCC1)")
    RulesStringValue(9,"IE 8 (Win2k3 x64)", "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.2; WOW64; Trident/4.0)")
    RulesStringValue(10,"IE &8 (Win7)", "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0)")
    RulesStringValue(11,"IE 8 (IE7 CompatMode)", "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Trident/4.0)")
    RulesStringValue(12,"IE 9 (Win7)", "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)")
    RulesStringValue(13,"IE 10 (Win8)", "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; WOW64; Trident/6.0)")
    RulesStringValue(14,"&Opera", "Opera/9.80 (Windows NT 6.2; WOW64) Presto/2.12.388 Version/12.10")
    RulesStringValue(15,"&Firefox 3.6", "Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.2.7) Gecko/20100625 Firefox/3.6.7")
    RulesStringValue(16,"&Firefox 4", "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:2.0.1) Gecko/20100101 Firefox/4.0.1")
    RulesStringValue(17,"&Firefox 16", "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:16.0) Gecko/20100101 Firefox/16.0")
    RulesStringValue(18,"&Firefox (Mac)", "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.6; en-US; rv:1.9.1.3) Gecko/20090824 Firefox/3.5.3")
    RulesStringValue(19,"Chrome", "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.26 Safari/537.11")
    RulesStringValue(20,"GoogleBot Crawler", "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)")
    RulesStringValue(21,"Kindle Fire (Silk)", "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3; en-us; Silk/1.0.22.79_10013310) AppleWebKit/533.16 (KHTML, like Gecko) Version/5.0 Safari/533.16 Silk-Accelerated=true")
    RulesStringValue(22,"&Custom...", "%CUSTOM%")
    public static var sUA: String = null;

    // Cause Fiddler to delay HTTP traffic to simulate typical 56k modem conditions
    public static RulesOption("Simulate &Modem Speeds", "Per&formance")
    var m_SimulateModem: boolean = false;

    // Removes HTTP-caching related headers and specifies "no-cache" on requests and responses
    public static RulesOption("&Disable Caching", "Per&formance")
    var m_DisableCaching: boolean = false;

    // Show the duration between the start of Request.Send and Response.Completed in Milliseconds
    public static RulesOption("&Show Time-to-Last-Byte", "Per&formance")
    var m_ShowTTLB: boolean = false;

    // Show the time of response completion
    public static RulesOption("Show Response &Timestamp", "Per&formance")
    var m_ShowTimestamp: boolean = false;

    public static RulesOption("Cache Always &Fresh", "Per&formance")
    var m_AlwaysFresh: boolean = false;
        
    // Force a manual reload of the script file.  Resets all
    // RulesOption variables to their defaults.
    public static ToolsAction("Reset Script")
    function DoManualReload() { 
        FiddlerObject.ReloadScript();
    }

    public static ContextAction("Decode Selected Sessions")
    function DoRemoveEncoding(oSessions: Session[]) {
        for (var x:int = 0; x < oSessions.Length; x++){
            oSessions[x].utilDecodeRequest();
            oSessions[x].utilDecodeResponse();
        }
        FiddlerApplication.UI.actUpdateInspector(true,true);
    }

    static function OnBoot() {
        // MessageBox.Show("Fiddler has finished booting");
        // System.Diagnostics.Process.Start("iexplore.exe");

        // FiddlerObject.UI.ActivateRequestInspector("HEADERS");
        // FiddlerObject.UI.ActivateResponseInspector("HEADERS");
    }
    
    static function OnShutdown() {
        // MessageBox.Show("Fiddler has shutdown");
    }

    static function OnAttach() {
        // MessageBox.Show("Fiddler is now the system proxy");
        // System.Diagnostics.Process.Start("proxycfg.exe", "-u");	// Notify WinHTTP of proxy change
    }

    static function OnDetach() {
        // MessageBox.Show("Fiddler is no longer the system proxy");
        // System.Diagnostics.Process.Start("proxycfg.exe", "-u");	// Notify WinHTTP of proxy change
    }
	
		static function ChangeColor(oSession: Session, t, c){
		oSession["ui-" + t] = c;
	}
	static function EndStr(s){
		return (s != '') ? s.substring(s.length - 1) : '';
	}
	
	static function GetRegStr(s,t,r){
		r = new RegExp("[.$^{\\[(|)*+?\\\\]", "gi");
		t = s.replace(r, function($1){
			switch($1){
			  case "?":
				return "(.?)";
			  case "*":
				return "(.*)";
			  default:
				return "\\" + $1;
			}
		});
		return ;
    }
			
	static function AutoMatchs(oSession: Session){
		if (!oSession.HTTPMethodIs("HEAD") && !oSession.HTTPMethodIs("CONNECT")){

			var ruleRow = [/** linrfiles */];
			var fullUrl = oSession.fullUrl;
			
			/** LinrFiddler_Hide_images */
			/** LinrFiddler_Hide_css */
			/** LinrFiddler_Hide_js */
		
			for (var i = 0, j = ruleRow.length; i < j; ++i){
				var dataArr = ruleRow[i].split('`');
				var uri = dataArr[0];
				var path = dataArr[1];
				var sWillowData = "";
		
				if (path != ''){
					if(uri.Length > 7 && uri.StartsWith("Fiddler:")){
						
						var sLast = uri.substring(7);
						var rStr = GetRegStr(sLast,null,null);
						var reg = new RegExp(rStr);
						var match = fullUrl.match(reg);
						
						if (reg.test(fullUrl)){
							var strArr = path.split('?*');
							var targetFile = strArr[0];
							
							for (var j = 1; j < strArr.length; ++j){
								targetFile = targetFile + match[j] + strArr[j];
							}
							oSession["x-replywithfile"] = targetFile;
							
							ChangeColor(oSession, "color", "white");
							ChangeColor(oSession, "backcolor", "purple");
						}
						
					}else if (uri.length > 6 && uri.StartsWith("REGEX:")){

						var pattern = uri.substring(6);
						if(pattern.test(fullUrl)){
						
							oSession["x-replywithfile"] = path;
							
							ChangeColor(oSession, "color", "white");
							ChangeColor(oSession, "backcolor", "purple");
							oSession["ui-customcolumn"] = "正则匹配";
							
						}
					}else if (uri.length > 6 && uri.StartsWith("EXACT:")){
	
						if(uri.indexOf('EXACT:http://host/') != 0){
							if (uri.substring(6) == fullUrl){
								oSession["x-replywithfile"] = path;
								ChangeColor(oSession, "color", "white");
								ChangeColor(oSession, "backcolor", "purple");
								oSession["ui-customcolumn"] = "精确匹配";
							}
						}else{
							var uripath = fullUrl.substring(fullUrl.lastIndexOf('/') + 1);
							var urifilename = uripath.split('?')[0];
							var localpath = path.split('\\');
							var localfilename = localpath.length > 0 ? localpath[localpath.length - 1] : path;
							
							if(urifilename == localfilename){
								oSession["x-replywithfile"] = path;
								ChangeColor(oSession, "color", "yellow");
								ChangeColor(oSession, "backcolor", "purple");
								oSession["ui-customcolumn"] = "模糊匹配";
							}
						}
						
					}else if(uri.length > 6 && uri.StartsWith("DELAY:")){
						var _uri = uri.substring(6);
						if(fullUrl.StartsWith(_uri)){
							oSession["response-trickle-delay"] = path;
							ChangeColor(oSession, "color", "orange");
							ChangeColor(oSession, "backcolor", "gray");
							oSession["ui-customcolumn"] = "延迟" + path;
						}
					}else if(uri == '*' || !(EndStr(fullUrl) == '/' && fullUrl.StartsWith("uri"))){
				
						if (EndStr(uri) == "/" && EndStr(path) == "\\"){
				
							var regex = new RegExp(uri + "[^#?]*");
							if(regex.test(fullUrl)){
								fullUrl = fullUrl.match(regex)[0];
								oSession["x-replywithfile"] = fullUrl.replace(uri, path).replace("/", "\\");
								ChangeColor(oSession, "color", "white");
								ChangeColor(oSession, "backcolor", "#40A62C");
								oSession["ui-customcolumn"] = "目录精确匹配";
							}else{
								var localarr = path.split('\\'), uriarr = fullUrl.split('/');
								if(localarr.length > 1 && uriarr.length > 1){
									var localdir = localarr[localarr.length - 2], uridir = uriarr[uriarr.length - 2],urlname = uriarr[uriarr.length - 1]
									if(localdir == uridir){
										oSession["x-replywithfile"] = path + urlname;
										ChangeColor(oSession, "color", "pink");
										ChangeColor(oSession, "backcolor", "#40A62C");
										oSession["ui-customcolumn"] = "目录模糊匹配";
									}
								}
							}
						}
					}
				}
			}
		}
	}
	
	static function AutoHosts(oSession: Session){
		  
		var hostList = [/** linrhosts */];
		var hostname = oSession.hostname;
		var IPAddressReg = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;

		for (var i = 0, j = hostList.length, cur, curArr; i < j; ++ i){
			cur = hostList[i];
			curArr = cur.split('`');
			if(curArr.length > 1){
				var host = curArr[1];
				var hostArr = host.split(' ');
				var ip = curArr[0];
				for(var k = 0, l = hostArr.length, ahost; k < l; ++ k){
					ahost = hostArr[k];
					if (ahost != '' && IPAddressReg.test(ip) && oSession.HostnameIs(ahost)){
						oSession.bypassGateway = true;
						oSession["x-overrideHost"] = ip;
						ChangeColor(oSession, "color", "white");
						ChangeColor(oSession, "backcolor", "#A43641");
					}
				}
			}
		}
	}


    static function OnBeforeRequest(oSession: Session) {
        // Sample Rule: Color ASPX requests in RED
        // if (oSession.uriContains(".aspx")) {	oSession["ui-color"] = "red";	}

        // Sample Rule: Flag POSTs to fiddler2.com in italics
        // if (oSession.HostnameIs("www.fiddler2.com") && oSession.HTTPMethodIs("POST")) {	oSession["ui-italic"] = "yup";	}

        // Sample Rule: Break requests for URLs containing "/sandbox/"
        // if (oSession.uriContains("/sandbox/")) {
        //     oSession.oFlags["x-breakrequest"] = "yup";	// Existence of the x-breakrequest flag creates a breakpoint; the "yup" value is unimportant.
        // }

        if ((null != gs_ReplaceToken) && (oSession.url.indexOf(gs_ReplaceToken)>-1)) {   // Case sensitive
            oSession.url = oSession.url.Replace(gs_ReplaceToken, gs_ReplaceTokenWith); 
        }
        if ((null != gs_OverridenHost) && (oSession.host.toLowerCase() == gs_OverridenHost)) {
            oSession["x-overridehost"] = gs_OverrideHostWith; 
        }

        if ((null!=bpRequestURI) && oSession.uriContains(bpRequestURI)) {
            oSession["x-breakrequest"]="uri";
        }

        if ((null!=bpMethod) && (oSession.HTTPMethodIs(bpMethod))) {
            oSession["x-breakrequest"]="method";
        }

        if ((null!=uiBoldURI) && oSession.uriContains(uiBoldURI)) {
            oSession["ui-bold"]="QuickExec";
        }

        if (m_SimulateModem) {
            // Delay sends by 300ms per KB uploaded.
            oSession["request-trickle-delay"] = "300"; 
            // Delay receives by 150ms per KB downloaded.
            oSession["response-trickle-delay"] = "150"; 
        }

        if (m_DisableCaching) {
            oSession.oRequest.headers.Remove("If-None-Match");
            oSession.oRequest.headers.Remove("If-Modified-Since");
            oSession.oRequest["Pragma"] = "no-cache";
        }

        // User-Agent Overrides
        if (null != sUA) {
            oSession.oRequest["User-Agent"] = sUA; 
        }

        if (m_Japanese) {
            oSession.oRequest["Accept-Language"] = "ja";
        }

        if (m_AutoAuth) {
            // Automatically respond to any authentication challenges using the 
            // current Fiddler user's credentials. You can change (default)
            // to a domain\\username:password string if preferred.
            //
            // WARNING: This setting poses a security risk if remote 
            // connections are permitted!
            oSession["X-AutoAuth"] = "(default)";
        }

        if (m_AlwaysFresh && (oSession.oRequest.headers.Exists("If-Modified-Since") || oSession.oRequest.headers.Exists("If-None-Match")))
        {
            oSession.utilCreateResponseAndBypassServer();
            oSession.responseCode = 304;
            oSession["ui-backcolor"] = "Lavender";
        }
		
		AutoHosts(oSession);
	AutoMatchs(oSession);
    }

    //
    // If a given session has response streaming enabled, then the OnBeforeResponse function 
    // is actually called AFTER the response was returned to the client.
    //
    // In contrast, this OnPeekAtResponseHeaders function is called before the response headers are 
    // sent to the client (and before the body is read from the server).  Hence this is an opportune time 
    // to disable streaming (oSession.bBufferResponse = true) if there is something in the response headers 
    // which suggests that tampering with the response body is necessary.
    // 
    // Note: oSession.responseBodyBytes is not available within this function!
    //
    static function OnPeekAtResponseHeaders(oSession: Session) {
        //FiddlerApplication.Log.LogFormat("Session {0}: Response header peek shows status is {1}", oSession.id, oSession.responseCode);
        if (m_DisableCaching) {
            oSession.oResponse.headers.Remove("Expires");
            oSession.oResponse["Cache-Control"] = "no-cache";
        }

        if ((bpStatus>0) && (oSession.responseCode == bpStatus)) {
            oSession["x-breakresponse"]="status";
            oSession.bBufferResponse = true;
        }
        
        if ((null!=bpResponseURI) && oSession.uriContains(bpResponseURI)) {
            oSession["x-breakresponse"]="uri";
            oSession.bBufferResponse = true;
        }

    }

    static function OnBeforeResponse(oSession: Session) {
        if (m_ShowTimestamp){
            oSession["ui-customcolumn"] = DateTime.Now.ToString("H:mm:ss.ffff") + " " + oSession["ui-customcolumn"]; 
        }

        if (m_ShowTTLB){
            oSession["ui-customcolumn"] = oSession.oResponse.iTTLB + "ms " + oSession["ui-customcolumn"]; 
        }

        if (m_Hide304s && oSession.responseCode == 304){
            oSession["ui-hide"] = "true";
        }
		
		/** LinrFiddler_Compat_Inspector */
    }

/*
    // This function executes just before Fiddler returns an error that it has 
    // itself generated (e.g. "DNS Lookup failure") to the client application.
    // These responses will not run through the OnBeforeResponse function above.
    static function OnReturningError(oSession: Session) {
    }
*/

    static function Main() {
        var today: Date = new Date();
        FiddlerObject.StatusText = " CustomRules.js was loaded at: " + today;
		
		if(!FiddlerApplication.UI.tabsViews.TabPages.ContainsKey('LinrFidderTab')){
			var oPage = new TabPage("项目管理");
				oPage.Name = 'LinrFidderTab';
				oPage.ImageIndex = 13;
			var btn = new Button();
				btn.Width = 180;
				btn.Text = "打开 LinrFiddler";
				oPage.Controls.Add(btn);
				btn.add_Click(LinrFidderClicked);
			FiddlerApplication.UI.tabsViews.TabPages.Add(oPage);
		}
        // Uncomment to add a "Server" column containing the response "Server" header, if present
        // FiddlerObject.UI.lvSessions.AddBoundColumn("Server", 50, "@response.server");
    }
	
	static function LinrFidderClicked(sender, e:EventArgs){
		System.Diagnostics.Process.Start('C:\\LinrFiddler\\' + "LinrFiddler.exe");
	}

    // These static variables are used for simple breakpointing & other QuickExec rules 
    static var bpRequestURI:String = null;
    static var bpResponseURI:String = null;
    static var bpStatus:int = -1;
    static var bpMethod: String = null;
    static var uiBoldURI: String = null;
    static var gs_ReplaceToken: String = null;
    static var gs_ReplaceTokenWith: String = null;
    static var gs_OverridenHost: String = null;
    static var gs_OverrideHostWith: String = null;

    // The OnExecAction function is called by either the QuickExec box in the Fiddler window,
    // or by the ExecAction.exe command line utility.
    static function OnExecAction(sParams: String[]) {

    FiddlerObject.StatusText = "ExecAction: " + sParams[0];

    var sAction = sParams[0].toLowerCase();
    switch (sAction) {
    case "bold":
        if (sParams.Length<2) {uiBoldURI=null; FiddlerObject.StatusText="Bolding cleared"; return;}
        uiBoldURI = sParams[1]; FiddlerObject.StatusText="Bolding requests for " + uiBoldURI;
        break;
    case "bp":
        FiddlerObject.alert("bpu = breakpoint request for uri\nbpm = breakpoint request method\nbps=breakpoint response status\nbpafter = breakpoint response for URI");
        break;
    case "bps":
        if (sParams.Length<2) {bpStatus=-1; FiddlerObject.StatusText="Response Status breakpoint cleared"; return;}
        bpStatus = parseInt(sParams[1]); FiddlerObject.StatusText="Response status breakpoint for " + sParams[1];
        break;
    case "bpv":
    case "bpm":
        if (sParams.Length<2) {bpMethod=null; FiddlerObject.StatusText="Request Method breakpoint cleared"; return;}
        bpMethod = sParams[1].toUpperCase(); FiddlerObject.StatusText="Request Method breakpoint for " + bpMethod;
        break;
    case "bpu":
        if (sParams.Length<2) {bpRequestURI=null; FiddlerObject.StatusText="RequestURI breakpoint cleared"; return;}
        bpRequestURI = sParams[1]; 
        FiddlerObject.StatusText="RequestURI breakpoint for "+sParams[1];
    break;
    case "bpafter":
        if (sParams.Length<2) {bpResponseURI=null; FiddlerObject.StatusText="ResponseURI breakpoint cleared"; return;}
        bpResponseURI = sParams[1]; 
        FiddlerObject.StatusText="ResponseURI breakpoint for "+sParams[1];
    break;
    case "overridehost":
        if (sParams.Length<3) {gs_OverridenHost=null; FiddlerObject.StatusText="Host Override cleared"; return;}
        gs_OverridenHost = sParams[1].toLowerCase();
        gs_OverrideHostWith = sParams[2];
        FiddlerObject.StatusText="Connecting to [" + gs_OverrideHostWith + "] for requests to [" + gs_OverridenHost + "]";
        break;
    case "urlreplace":
        if (sParams.Length<3) {gs_ReplaceToken=null; FiddlerObject.StatusText="URL Replacement cleared"; return;}
        gs_ReplaceToken = sParams[1];
        gs_ReplaceTokenWith = sParams[2].Replace(" ", "%20");  // Simple helper
        FiddlerObject.StatusText="Replacing [" + gs_ReplaceToken + "] in URIs with [" + gs_ReplaceTokenWith + "]";
        break;
    case "allbut":
    case "keeponly":
        if (sParams.Length<2) { FiddlerObject.StatusText="Please specify Content-Type to retain during wipe."; return;}
        FiddlerObject.UI.actSelectSessionsWithResponseHeaderValue("Content-Type", sParams[1]);
        FiddlerObject.UI.actRemoveUnselectedSessions();
        FiddlerObject.UI.lvSessions.SelectedItems.Clear();
        FiddlerObject.StatusText="Removed all but Content-Type: " + sParams[1];
        break;
    case "stop":
        FiddlerObject.UI.actDetachProxy();
        break;
    case "start":
        FiddlerObject.UI.actAttachProxy();
        break;
    case "cls":
    case "clear":
        FiddlerObject.UI.actRemoveAllSessions();
        break;
    case "g":
    case "go":
        FiddlerObject.UI.actResumeAllSessions();
        break;
    case "goto":
        if (sParams.Length != 2) return;
        Utilities.LaunchHyperlink("http://www.google.com/search?hl=en&btnI=I%27m+Feeling+Lucky&q=" + Utilities.UrlEncode(sParams[1]));
        break;
    case "help":
        Utilities.LaunchHyperlink("http://www.fiddler2.com/redir/?id=quickexec");
        break;
    case "hide":
        FiddlerObject.UI.actMinimizeToTray();
        break;
    case "log":
        FiddlerApplication.Log.LogString((sParams.Length<2) ? FiddlerApplication.Log.LogString("User couldn't think of anything to say...") : sParams[1]);
        break;
    case "nuke":
        FiddlerObject.UI.actClearWinINETCache();
        FiddlerObject.UI.actClearWinINETCookies(); 
        break;
    case "show":
        FiddlerObject.UI.actRestoreWindow();
        break;
    case "tail":
        if (sParams.Length<2) { FiddlerObject.StatusText="Please specify # of sessions to trim the session list to."; return;}
        FiddlerObject.UI.TrimSessionList(int.Parse(sParams[1]));
        break;
    case "quit":
        FiddlerObject.UI.actExit();
        break;
    case "dump":
        FiddlerObject.UI.actSelectAll();
        FiddlerObject.UI.actSaveSessionsToZip(CONFIG.GetPath("Captures") + "dump.saz");
        FiddlerObject.UI.actRemoveAllSessions();
        FiddlerObject.StatusText = "Dumped all sessions to " + CONFIG.GetPath("Captures") + "dump.saz";
        break;

    default:
        if (sAction.StartsWith("http") || sAction.StartsWith("www")){
            System.Diagnostics.Process.Start(sParams[0]);
        }
        else
        {
            FiddlerObject.StatusText = "Requested ExecAction: '" + sAction + "' not found. Type HELP to learn more.";
        }
    }
    }
	
	/** LinrFiddler_Compat_Inspector_Script */
}