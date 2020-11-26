using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class ConstruireMur : MonoBehaviour
{
    public TMP_InputField InputTexte;
    public GameObject MonCanvasCacheCorrect;
    public GameObject Canvasfaux;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if( InputTexte.text == "tant qu'il y a briques construire mur"){
            MonCanvasCacheCorrect.SetActive(true);
        }
        if( InputTexte.text == "construire mur tant qu'il y a briques"){
            Canvasfaux.SetActive(true);
        }
        if( InputTexte.text == ""){
            Canvasfaux.SetActive(false);
        }
    }
}
