using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class CharpentePlacer : MonoBehaviour
{
    public TMP_InputField chacune;
    public TMP_InputField toit;
    public GameObject Bouton1;
    public GameObject Bouton2;
    public GameObject Juste;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if( chacune.text == "pour chacune"){
                Bouton1.SetActive(true);
            }else{
                Bouton1.SetActive(false);
            }
            
        if( toit.text == "lever placer sur toit"){
                Bouton2.SetActive(true);
            }else{
                Bouton2.SetActive(false);
            }
        if(chacune.text == "pour chacune"
        && toit.text == "lever placer sur toit"){
            Juste.SetActive(true);
        }
        }
    }

