using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class NouvelleCloture : MonoBehaviour
{
    
    public TMP_InputField TantQue;
    public GameObject check1;
    public TMP_InputField PasAssez;
    public GameObject check2;
    public TMP_InputField Nouvelle;
    public GameObject check3;
    public TMP_InputField Cloture;
    public GameObject check4;

    public GameObject Suivant;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if(TantQue.text == "tant que"){
            check1.SetActive(true);
        }else{
            check1.SetActive(false);
        }
        if(PasAssez.text == "pas assez de cloture"){
            check2.SetActive(true);
        }else{
            check2.SetActive(false);
        }
        if(Nouvelle.text == "nouvelle"){
            check3.SetActive(true);
        }else{
            check3.SetActive(false);
        }
        if(Cloture.text == "cloture"){
            check4.SetActive(true);
        }else{
            check4.SetActive(false);
        }

        if(check1.activeSelf && check2.activeSelf && check3.activeSelf && check4.activeSelf){
            Suivant.SetActive(true);
        }else{
            Suivant.SetActive(false);
        }

    }
}
