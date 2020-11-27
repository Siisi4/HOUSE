using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SoundHoulder : MonoBehaviour
{
    private static SoundHoulder son;

    private void Awake(){
        if(son != null){
            Destroy(gameObject);
        }else{
            son = this;
            DontDestroyOnLoad(transform.gameObject);
        }
    }

   
}
