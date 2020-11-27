using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class Rideaux : MonoBehaviour
{
    public TMP_InputField pour;
    public GameObject check1;
    public TMP_InputField fenetre;
    public GameObject check2;
    public TMP_InputField ajouter;
    public GameObject check3;
    public TMP_InputField rideau;
    public GameObject check4;

    public GameObject Suivant;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if(pour.text == "pour chaque"){
            check1.SetActive(true);
        }else{
            check1.SetActive(false);
        }
        if(fenetre.text == "fenêtre" || fenetre.text == "fenetre"){
            check2.SetActive(true);
        }else{
            check2.SetActive(false);
        }
        if(ajouter.text == "ajouter"){
            check3.SetActive(true);
        }else{
            check3.SetActive(false);
        }
        if(rideau.text == "un rideau"){
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
