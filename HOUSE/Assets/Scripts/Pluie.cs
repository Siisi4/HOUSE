using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class Pluie : MonoBehaviour
{
    // input part 1
    public TMP_InputField si;
    public GameObject checksi;
    public TMP_InputField pas;
    public GameObject checkpas;

    // input part 2
    public TMP_InputField goutieres;
    public GameObject checkgoutieres;
    public TMP_InputField eau;
    public GameObject checkeau;
    public TMP_InputField coule;
    public GameObject checkcoule;

    // si tout est juste object
    public GameObject Juste;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        // "si"
        if(si.text == "si"){
            checksi.SetActive(true);
        }else{
            checksi.SetActive(false);
        }

        // "pas"
        if(pas.text == "pas"){
            checkpas.SetActive(true);
        }else{
            checkpas.SetActive(false);
        }

        // "goutieres"
        if(goutieres.text == "goutieres" || goutieres.text == "goutières"){
            checkgoutieres.SetActive(true);
        }else{
            checkgoutieres.SetActive(false);
        }

        // "eau"
        if(eau.text == "eau"){
            checkeau.SetActive(true);
        }else{
            checkeau.SetActive(false);
        }

        // "coule partout"
        if(coule.text == "coule partout"){
            checkcoule.SetActive(true);
        }else{
            checkcoule.SetActive(false);
        }


        // canvas de suite et infos ouvert si tout est juste  + "!" 
        if(checksi.activeSelf
        && checkpas.activeSelf
        && checkgoutieres.activeSelf
        && checkeau.activeSelf
        && checkcoule.activeSelf){
            Juste.SetActive(true);
        }else{
            Juste.SetActive(false);
        }

    }
}
