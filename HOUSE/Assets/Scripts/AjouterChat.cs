using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AjouterChat : MonoBehaviour
{
    public GameObject Suivant;
    public GameObject SiNon;
    public void oui(){
        Suivant.SetActive(true);
    }
    public void non(){
        SiNon.SetActive(true);
        Suivant.SetActive(true);
    }
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
