using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.Runtime.InteropServices;

public class TimerControl : MonoBehaviour
{
    [DllImport("__Internal")]
    private static extern void JSTimerStop();

    public void StopTimer()
    {
        JSTimerStop();
    }

    [DllImport("__Internal")]
    private static extern void JSTimerStart();
//booleen isstart=true...
    public void StartTimer()
    {
        //if issart==false { stop }
    JSTimerStart();
    }
}


