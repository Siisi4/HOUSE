using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
using UnityEngine.UI;

public class CavecorrecteTexte : MonoBehaviour
{
    
    public TMP_InputField InputTexte;
    public GameObject BoutonSuivant;
    public TMP_InputField InputTexte2;
    public GameObject BoutonFin;
    public TMP_InputField InputTexte3;
    public GameObject MonCanvasCacheCorrect;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if( InputTexte.text == "creuser()"){
            BoutonSuivant.SetActive(true);
        }
        if( InputTexte2.text == "jeter la terre()"){
            BoutonFin.SetActive(true);
        }
        if( InputTexte3.text == "recommencer()"){
            MonCanvasCacheCorrect.SetActive(true);
        }
    }
}
