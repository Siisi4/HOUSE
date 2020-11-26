using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class FonctionCloture : MonoBehaviour
{
    
    public GameObject Suivant;
    public GameObject bulle;

    public void Cloture(){
        Suivant.SetActive(true);
        bulle.SetActive(true);
    }
   
}
