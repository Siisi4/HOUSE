using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class SceneSwitcher : MonoBehaviour
{
    
    public void SwitchTo2(){
        SceneManager.LoadScene("Langages 1");
    }

    public void SwitchToCave(){
        SceneManager.LoadScene("LaCave");
    }

}
