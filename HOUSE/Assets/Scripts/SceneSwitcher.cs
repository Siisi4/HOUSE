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

    public void SwitchToMur(){
        SceneManager.LoadScene("Mur");
    }

    public void SwitchToCharpente(){
        SceneManager.LoadScene("Charpente");
    }

    public void SwitchToBaie(){
        SceneManager.LoadScene("Baie");
    }
    public void SwitchToFenetres(){
        SceneManager.LoadScene("Fenetres");
    }

    public void SwitchToChat(){
        SceneManager.LoadScene("Chat");
    }

    public void SwitchtoQuestions(){
        SceneManager.LoadScene("phraseDeDev");
    }

}
