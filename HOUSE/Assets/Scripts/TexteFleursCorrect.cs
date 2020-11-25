using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
using UnityEngine.UI;

public class TexteFleursCorrect : MonoBehaviour
{
    public TMP_InputField InputTexte;
    public GameObject MonCanvasCacheCorrect;
    
    
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if( InputTexte.text == "si rouge alors peindre en jaune"){
            MonCanvasCacheCorrect.SetActive(true);
        }
    }
}
