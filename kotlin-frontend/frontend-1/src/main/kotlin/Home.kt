import react.dom.h1
import react.dom.render
import kotlin.browser.document
//import kotlinx.html.*
//import kotlinx.html.dom.*

/**
 * @author User on 24.04.2020.
 */
fun main(args: Array<String>){
//    requireAll(require.context("kotlin", true, js("/\\.css$/")))
    document.bgColor = "blue"

//    render(document.getElementById("root")!!) {
//        h1 { +"Hello World!" }
//        app()
//    }
//    RBuilder()
    render(document.getElementById("root")) {
        h1 {+"Home Page. Hello, React+Kotlin/JS!"
        }
    }

    /*
    document.body!!.append.div {
        h1 {
            +"Welcome to Kotlin/JS!"
        }
        p {
            +"Fancy joining this year's "
            a("https://kotlinconf.com/") {
                +"KotlinConf"
            }
            +"?"
        }
    }
        */
}