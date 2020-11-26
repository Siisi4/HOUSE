using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class PoserFenetres : MonoBehaviour
{
    public TMP_InputField TexteJoueur;
    public GameObject CanvasJuste;
    
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
       if(TexteJoueur.text == "pour chaque façade poser deux fenêtres" || TexteJoueur.text == "pour chaque facade poser deux fenetres"){
           CanvasJuste.SetActive(true);
       }else{
           CanvasJuste.SetActive(false);
       }
    } 
}

