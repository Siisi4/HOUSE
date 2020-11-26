using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class BaieEtFenetres : MonoBehaviour
{
    public TMP_InputField Premier;
    public GameObject checkPremier;
    public TMP_InputField Deuxieme;
    public GameObject checkDeuxieme;
    public TMP_InputField Troisieme;
    public GameObject checkTroisieme;
    public GameObject Juste;
    
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
        // Premier Input
        if (Premier.text == "si baie ronde" || Premier.text == "Si baie ronde"){
            checkPremier.SetActive(true);
        }else{
            checkPremier.SetActive(false);
        }

        // Deuxième Input
        if (Deuxieme.text == "mettre fenêtres rondes" || Deuxieme.text == "mettre fenetres rondes"){
            checkDeuxieme.SetActive(true);
        }else{
            checkDeuxieme.SetActive(false);
        }

        // Troisième Input
        if (Troisieme.text == "sinon mettre fenêtres carrées" || Troisieme.text == "sinon mettre fenetres carrees"){
            checkTroisieme.SetActive(true);
        }else{
            checkTroisieme.SetActive(false);
        }

        // si toutes les conditions sont justes, alors canvas de "suivant" qui s'ouvre.

        if (checkPremier.activeSelf && checkDeuxieme.activeSelf && checkTroisieme.activeSelf){
            Juste.SetActive(true);
        }else{
            Juste.SetActive(false);
        }
    }
}
