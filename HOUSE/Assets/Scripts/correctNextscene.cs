using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class correctNextscene : MonoBehaviour
{
    public void ReponseCorrect(){
        SceneManager.LoadScene("Langages 1");
    }
    
    public void ReponseCorrectHTML(){
        SceneManager.LoadScene("Langages");
    }

    public void ReponseCorrectCSS(){
        SceneManager.LoadScene("Fleurs");
    }

    
}
