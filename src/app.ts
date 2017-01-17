//our root app component
import {Component} from 'angular2/angular2'
import {Router, RouteConfig, RouterOutlet, RouterLink} from 'angular2/router'

@Component({
  selector: 'index',
  templateUrl: 'src/pages/index.html'
})
export class Index {}

@Component({
  selector: 'assignments',
  // templateUrl: 'src/pages/assignments.html'
  template: `
  <div class="row content row-87">
  <div class="col-md-2"></div>
  <!-- <div class="col-md-2 sidenav">
    <div w3-include-html="./left_sidebar.html"> </div>
    <script>
      w3IncludeHTML();
    </script>
  </div> -->
    <div class="col-md-8 text-left">
    <div>
    <h3 class = "sep_heading">BRIDGES Assignments(UNC Charlotte)</h3>
    </br>
    <p class = "vert_space"> </p>
    <h4> Fall 2014: Data Structures </h4>
    <ul style = "list-style-type:circle">
      <li> <a href = "./project_data/assignments/f14/1.pdf">
          Project 1: Queue Application</a></li>
      <li> <a href = "./project_data/assignments/f14/2.pdf">
          Project 2: Binary Search Tree(Earthquake Data)</a></li>
      <li> <a href = "./project_data/assignments/f14/3a.pdf">
          Project 3-1: Graph Algorithms(IMDB Data)</a></li>
      <li> <a href = "./project_data/assignments/f14/3b.pdf">
          Project 3-2: Graph Algorithms(Bacon Number)</a></li>
    </ul>
    <h4> Spring 2015: Data Structures </h5>
    <ul style = "list-style-type:circle">
      <li> <a href = "./project_data/assignments/s15/1.pdf">
          Project 1: List Application(IMDB Actor/Movie Data)</a></li>
      <li> <a href = "./project_data/assignments/s15/2.pdf">
          Project 2: Stacks : Expression Evaluation)</a></li>
      <li> <a href = "./project_data/assignments/s15/3a.pdf">
          Project 3-1: Binary Search Tree ADT With Earthquake
                    Data</a></li>
      <li> <a href = "./project_data/assignments/s15/3b.pdf">
          Project 3-2: Search Tree Operatoins with USGS
                Earthquake Data)</a></li>
    </ul>
    <h4> Spring 2016: Data Structures</h5>
    <ul style = "list-style-type:circle">
      <li> <a href = "./project_data/assignments/s16/2214/1-1.pdf">
          Project 1-1: Linked Lists: ADT </a></li>
      <li> <a href = "./project_data/assignments/s16/2214/1-2.pdf">
          Project 1-2: Linked List Visualization </a></li>
      <li> <a href = "./project_data/assignments/s16/2214/1-3.pdf">
          Project 1-3: Linked List (IGN Video Games Data)</a></li>
      <li> <a href = "./project_data/assignments/s16/2214/2-1.pdf">
          Project 2-1: Binary Search Trees Operations and VisualizationData)</a></li>
      <li> <a href = "./project_data/assignments/s16/2214/2-2.pdf">
          Project 2-2: Binary Search Trees (USGS Twitter Feed))
          </a></li>
    </ul>
    <h4> Spring 2016: Algorithm Analysis</h5>
    <ul style = "list-style-type:circle">
      <li> <a href = "./project_data/assignments/s16/2215/1a.pdf">
          Project 1-1: Graphs: Bacon Number(IMDB Actor/Movie
                    Data)</a></li>
      <li> <a href = "./project_data/assignments/s16/2215/1b.pdf">
          Project 1-2: raphs: Bacon Number(IMDB Actor/Movie
                    Data)</a></li>
      <li> <a href = "./project_data/assignments/s16/2215/2a.pdf">
          Project 2-1: Binary Search Tree Operatoins With
                  Earthquake Data</a></li>
      <li> <a href = "./project_data/assignments/s16/2215/2b.pdf">
          Project 2-2: Search Tree Height/Balance Factor, With
                  Earthquake Data</a></li>
      <li> <a href = "./project_data/assignments/s16/2215/2c.pdf">
          Project 2-3: AVL Trees, With Earthquake Data</a></li>
    </ul>
    <h4> Fall 2016: Analysis of Algorithms</h5>
    <ul style = "list-style-type:circle">
      <li> <a href = "./project_data/assignments/f16/1a.pdf">
          Project 1-1: Graphs: Traversals (IMDB Actor/Movie
                    Data)</a></li>
      <li> <a href = "./project_data/assignments/f16/1b.pdf">
          Project 1-2: Graphs: Dijkstra's Shortest Path
                (Transportation Network) </a></li>
      <li> <a href = "./project_data/assignments/f16/2.pdf">
          Project 2: Min Heap Operations, with USGS
              Earthquake Data) </a></li>
    </ul>
    </div>
    <p> <p>
  </div>

</div>
`
})
export class Assignments {}


@Component({
  selector: 'datasets',
  // templateUrl: 'src/pages/datasets.html'
  template:
  `
  <div class="row row-87 content">
  <div class="col-md-2"></div>
  <!-- <div class="col-md-2 sidenav">
  <div w3-include-html="./left_sidebar.html"> </div>
  <script>
  w3IncludeHTML();
</script>
</div> -->




<div class="col-md-8 text-left">

  <div>
  </br>
  <h3 class = "sep_heading">BRIDGES Datasets(UNC Charlotte)</h3></br>
  <p class = "vert_space"> </p>
  <p> <i> Most BRIDGES datasets are  held  in a Mongo
    database with BRIDGES API calls to access them, including
    on-demand streaming data; some of the older datasets that
    were held in files are included below in their original
    form. Currently ongoing effort to access
    <a href="http://think.cs.vt.edu/corgis/"> Corgis Datasets</a>, 				via BRIDGES.  </i><p>
      <ul style = "list-style-type:circle">
        <li> <a href = "./project_data/datasets/large_imdb.txt">
          Curated IMDB (Actor/Movie) Data</a></li>
          <li> USGS Earthquake Twitter Feed Data
            (Accessed in a sane manner as a list of objects via
            the BRIDGES API)
            <a href =
            "http://earthquakes-uncc.herokuapp.com/eq/latest/100">
            Example command to retrieve 100 most  recent
            earthquake Tweets</a>"</li>
            <li> Video Game Review Data (extracted via BRIDGES API)
              <a href ="http://bridgesdata.herokuapp.com/api/games">
                Example query to retrieve Video Game Review Data</a></li>
                <li> Shakespeare Books, Plays, Poems (Metadata only)
                  (Accessed in a sane manner as a list of objects via
                  the BRIDGES API)
                  <a href="http://bridgesdata.herokuapp.com/api/shakespeare/">
                    Example query to retrieve Video Game Review Data</a></li>
                    <li> Books
                      (Accessed in a sane manner as a list of objects via
                      the BRIDGES API)
                      <a href = "http://bridgesdata.herokuapp.com/api/books/">
                        Example query to retrieve Book Data</a></li>
                      </ul>
                    </div>
                    <p> <p>
                    </div>
                  </div>

  `
})
export class Datasets {}


@Component({
  selector: 'bridges-design',
  // templateUrl: 'src/pages/bridges-design.html'
  template:
  `
  <div class="row row-87 content">
  <div class="col-md-2"></div>
  <!-- <div class="col-md-2 sidenav">
    <div w3-include-html="./left_sidebar.html"> </div>
    <script>
      w3IncludeHTML();
    </script>
  </div> -->





  <div class="col-md-8 text-left">
			<div></br>
			<h3 class = "sep_heading">BRIDGES Design</h3></br>
			<!-- <img src = "./img/bridges_design.jpg" style = "vertical-align:middle"></img> -->
      <img class="img-responsive"  src = "./img/bridges_design.jpg" style = "vertical-align:middle"></img>
			</div>
			<p> <p>
        <hr>
			<p>In our design the student use our client on their personal computer. This
			client program is run via a gradle build script which allows it to be integrated
			into any IDE. We chose to do this because we may have students who are using
			Eclipse, JGrasp or Netbeans. This client can connect to the server via an API
			key or log in credentials. <p>

			The server provides three main functions; a crawler which gets data from
			data-sources, an API which provides access to data from the client, and a website
			where students can view their visualizations, change their log in credentials, or
			validate their account with data-sources. Each time the client makes a request for
			data from a data-source we determine whether they have provided us with the
			authentication to access the data-source. If they have provided authorized access,
			we make a request on their behalf; otherwise, we make a request using our public
			account. The public account will only be able to fetch from certain providers
			because we have a limit to the amount of requests we can make with the public
			account. All requests are cached to prevent request throttling by the
			data-source's API. After receiving data, students will be required to manipulate
			this data and then make a post request with this data to the server via the API.
			These posts will store their submission in a database and generate a link to a
			webpage, where the data in the database will be visualized using D3.
			<p>
		</div>
	</div>

  `
})
export class BridgesDesign {}


@Component({
  selector: 'bridges-eval',
  // templateUrl: 'src/pages/bridges-eval.html'
  template:
  `
  <div class="row row-87 content">
  <div class="col-md-2"></div>
  <!-- <div class="col-md-2 sidenav">
    <div w3-include-html="./left_sidebar.html"> </div>
    <script>
      w3IncludeHTML();
    </script>
  </div> -->

  <div class="col-md-8 text-left">
      <div>
      </br>
      <h3 class = "sep_heading">BRIDGES Evaluation (UNC Charlotte)</h3>
      </br>
      <p class = "vert_space"> </p>
      <h4> Instruments</h4>
      <ul style = "list-style-type:circle">
        <li> <a href = "./project_data/eval/instruments/presurvey.pdf">
            Attitude Toward Computing(Pre Survey)</a></li>
        <li> <a href =
            "./project_data/eval/instruments/postsurvey2214.pdf">
            Attitude Toward Computing(Post Survey)</a></li>
        <li>
        <a href = "./project_data/eval/instruments/project_survey.pdf">
            Project Survey</a></li>
        <li> <a href = "./project_data/eval/instruments/qbank_mc.pdf">
            Knowledge Test Question Bank(Multiple Choice)</a></li>
        <li><a href = "./project_data/eval/instruments/qbank_sa.pdf">
            Knowledge Test Question Bank(Short Answer)</a></li>
      </ul>
      <h4> Reports</h4>
      <ul style = "list-style-type:circle">
        <li> <a href = "./project_data/eval/reports/eval_rpt_f13.pdf">
            Fall 2013 Report</a></li>
        <li> <a href = "./project_data/eval/reports/eval_rpt_s14.pdf">
            Spring 2014 Report</a></li>
        <li> <a href = "./project_data/eval/reports/eval_rpt_f14.pdf">
            Fall 2014 Report</a></li>
        <li> <a href = "./project_data/eval/reports/eval_rpt_s15.pdf">
            Spring 2015 Report</a></li>
        <li> <a href = "./project_data/eval/reports/eval_rpt_s16.pdf">
            Fall 2015 Report</a></li>
        <li> <a href = "./project_data/eval/reports/stars_workshop_participant_responses.pdf">
            Summer 2015 Stars Workshop Participant Report</a></li>
      </ul>
      </div>
      <p> <p>
    </div>




</div>

  `
})
export class BridgesEvaluation {}


@Component({
  selector: 'bridges-setup',
  // templateUrl: 'src/pages/bridges-setup.html'
  template:
  `


  <div class="row content">
    <!-- <div class="col-md-2"></div> -->
    <!-- <div class="col-md-2 sidenav">
      <div w3-include-html="./left_sidebar.html"> </div>
      <script>
        w3IncludeHTML();
      </script>
    </div> -->


    <div class="col-md-8 text-left row-87">
      <h3 class = "sep_heading">BRIDGES:Getting Started(Setup and running BRIDGES Programs)</h3>
      <p> <i> BRIDGES works with both C++ and Java. Setting up BRIDGES is slightly
        different , so we provide help pages on building a simple BRIDGES program.
        Currently detailed help pages for using BRIDGES with Eclipse is provided.
        See the links below. However, there are many ways to run a BRIDGES program.
        These distinctions are detailed below:</i> <p>
          <div>
            <h4> BRIDGES(Java Version)</h4>
            <ul>
              <li> A Jar file is provided(see the links on the left) that contains all the needed
                classes to run a BRIDGES program(including on command line, so long as the JAR
                is part of your Java class path.
                <li> <b>Using BRIDGES Java with Eclipse <a href = "./bridges_setup_java_eclipse.html">
                  [Detailed Instructions]</a></b></li>
                  <li> <b>Using BRIDGES Java with BlueJ <a href = "./bridges_setup_java_bluej.html">
                    [Detailed Instructions]</a></b></li>
                    <li> <b>Using BRIDGES Java with IntelliJ <a href = "./bridges_setup_java_intellij.html">
                      [Detailed Instructions]</a></b></li>
                      <li> <b>Using BRIDGES Java with JGrasp <a href = "./bridges_setup_java_jgrasp.html">
                        [Detailed Instructions]</a></b></li>
                        <li> Instructions for additional IDEs will be provided soon.</li>
                        </ul>
                      </div>
                      <div>
                        <h4> BRIDGES(C++ Version)</h4>
                        <ul>
                          <li> The C++ version is provided with a set of templated classes, all housed in
                            header files. Thus, so long as these header files can be accessed by the BRIDGES
                            application, that is all that is needed. See the links left for C++ BRIDGES
                            Zip archive.</li>
                            <li> The C++ version works with the <a href = "https://curl.haxx.se">CURL</a> library,
                              for communicating with the web server and transmitting assignments for
                              visualization.</li>
                              <li> For expert users, or users who prefer command line or makefiles, BRIDGES
                                programs can be compiled and linked with the curl library and executed, so long
                                as the include(both the Bridges and Curl headers) and library options
                                (Curl library) are specified based on their local installation.</li>
                                <li> <b>Using BRIDGES C++ with Eclipse
                                  <a href = "./bridges_setup_cxx_eclipse.html">[Detailed Instructions]</a></b></li>
                                  <li> <b>Using BRIDGES C++ with Xcode
                                    <a href = "./bridges_setup_cxx_xcode.html">[Detailed Instructions]</a></b></li>
                                    <li> Instructions for additional IDEs will be provided soon.</li>
                                    </ul>
                                  </div>




  </div>

  <!--footer-->
  <footer w3-include-html="template/footer.html"></footer>


  </div>

  `
})
export class BridgesSetup {}


@Component({
  selector: 'bridges-team',
  // templateUrl: 'src/pages/bridges-team.html'
  template:
  `
  <h2 class="sub-header">Faculty Investigators</h2>
<div class="container m-t-md">
  <!-- First row -->
  <div class="row">



    <div class="col-xs-12 col-md-4">
      <!-- Card -->
      <article class="card animated fadeInLeft">
        <img width="300" height="300" class="card-img-top img-responsive" src="./img/kalpathi.jpg" alt="Deer in nature" />
        <div class="card-block">
          <h4 class="card-title">Dr. Kalpathi Subramanian</h4>
          <h6 class="text-muted">Associate Professor</h6>
          <p class="card-text">Charlotte Visualization Center<br>
            Department of Computer Science<br>
            The University of North Carolina at Charlotte<br>
            email: <a href = "mailto:krs@uncc.edu">krs@uncc.edu</a><br> </p>
          </div>
        </article><!-- .end Card -->
      </div>





      <div class="col-xs-12 col-md-4">
        <!-- Card -->
        <article class="card animated fadeInLeft">
          <img width="300" height="300" class="card-img-top img-responsive" src="./img/jamie.jpg" alt="Deer in nature" />
          <div class="card-block">
            <h4 class="card-title">	Dr. Jamie Payton </h4>
            <h6 class="text-muted">Associate Professor</h6>
            <p class="card-text">Charlotte Visualization Center<br>
              Department of Computer Science<br>
              The University of North Carolina at Charlotte<br>
              email: <a href = "mailto:krs@uncc.edu">payton@uncc.edu</a><br> </p>
            </div>
          </article><!-- .end Card -->
        </div>





        <div class="col-xs-12 col-md-4">
          <!-- Card -->
          <article class="card animated fadeInLeft">
            <img width="300" height="300" class="card-img-top img-responsive" src="./img/michael.jpg" alt="Deer in nature" />
            <div class="card-block">
              <h4 class="card-title">Dr. Kalpathi Subramanian</h4>
              <h6 class="text-muted">Associate Professor</h6>
              <p class="card-text">Charlotte Visualization Center<br>
                Department of Computer Science<br>
                The University of North Carolina at Charlotte<br>
                email: <a href = "mailto:krs@uncc.edu">krs@uncc.edu</a><br> </p>
              </div>
            </article><!-- .end Card -->
          </div>





          <div class="col-xs-12 col-md-4">
            <!-- Card -->
            <article class="card animated fadeInLeft">
              <img width="300" height="300" class="card-img-top img-responsive" src="./img/robert.png" alt="Deer in nature" />
              <div class="card-block">
                <h4 class="card-title">Dr. Kalpathi Subramanian</h4>
                <h6 class="text-muted">Associate Professor</h6>
                <p class="card-text">Charlotte Visualization Center<br>
                  Department of Computer Science<br>
                  The University of North Carolina at Charlotte<br>
                  email: <a href = "mailto:krs@uncc.edu">krs@uncc.edu</a><br> </p>
                </div>
              </article><!-- .end Card -->
            </div>





            <div class="col-xs-12 col-md-4">
              <!-- Card -->
              <article class="card animated fadeInLeft">
                <img width="300" height="300" class="card-img-top img-responsive" src="./img/paula.jpg" alt="Deer in nature" />
                <div class="card-block">
                  <h4 class="card-title">Dr. Kalpathi Subramanian</h4>
                  <h6 class="text-muted">Associate Professor</h6>
                  <p class="card-text">Charlotte Visualization Center<br>
                    Department of Computer Science<br>
                    The University of North Carolina at Charlotte<br>
                    email: <a href = "mailto:krs@uncc.edu">krs@uncc.edu</a><br> </p>
                  </div>
                </article><!-- .end Card -->
              </div>



            </div>
          </div>



          <h2 class="sub-header">Student Investigators</h2>
          <div class="container m-t-md">
            <!-- First row -->
            <div class="row">



              <div class="col-xs-12 col-md-4">
                <!-- Card -->
                <article class="card animated fadeInLeft">
                  <img width="300" height="300" class="card-img-top img-responsive" src="./img/burlinson.jpg" alt="Deer in nature" />
                  <div class="card-block">
                    <h4 class="card-title">Dr. Kalpathi Subramanian</h4>
                    <h6 class="text-muted">Associate Professor</h6>
                    <p class="card-text">Charlotte Visualization Center<br>
                      Department of Computer Science<br>
                      The University of North Carolina at Charlotte<br>
                      email: <a href = "mailto:krs@uncc.edu">krs@uncc.edu</a><br> </p>
                    </div>
                  </article><!-- .end Card -->
                </div>





                <div class="col-xs-12 col-md-4">
                  <!-- Card -->
                  <article class="card animated fadeInLeft">
                    <img width="300" height="300" class="card-img-top img-responsive" src="./img/mmehedint.jpg" alt="Deer in nature" />
                    <div class="card-block">
                      <h4 class="card-title">	Dr. Jamie Payton </h4>
                      <h6 class="text-muted">Associate Professor</h6>
                      <p class="card-text">Charlotte Visualization Center<br>
                        Department of Computer Science<br>
                        The University of North Carolina at Charlotte<br>
                        email: <a href = "mailto:krs@uncc.edu">payton@uncc.edu</a><br> </p>
                      </div>
                    </article><!-- .end Card -->
                  </div>





                  <div class="col-xs-12 col-md-4">
                    <!-- Card -->
                    <article class="card animated fadeInLeft">
                      <img width="300" height="300" class="card-img-top img-responsive" src="./img/dakota.jpg" alt="Deer in nature" />
                      <div class="card-block">
                        <h4 class="card-title">Dr. Kalpathi Subramanian</h4>
                        <h6 class="text-muted">Associate Professor</h6>
                        <p class="card-text">Charlotte Visualization Center<br>
                          Department of Computer Science<br>
                          The University of North Carolina at Charlotte<br>
                          email: <a href = "mailto:krs@uncc.edu">krs@uncc.edu</a><br> </p>
                        </div>
                      </article><!-- .end Card -->
                    </div>






                  </div>
                </div>




                <h2 class="sub-header">Past Students</h2>
                <div class="container m-t-md">
                  <!-- First row -->
                  <div class="row">

                    <div class="col-xs-12 col-md-4">
                      <!-- Card -->
                      <article class="card animated fadeInLeft">
                        <img width="300" height="300" class="card-img-top img-responsive" src="./img/stephen.jpg" alt="Deer in nature" />
                        <div class="card-block">
                          <h4 class="card-title">Dr. Kalpathi Subramanian</h4>
                          <h6 class="text-muted">Associate Professor</h6>
                          <p class="card-text">Charlotte Visualization Center<br>
                            Department of Computer Science<br>
                            The University of North Carolina at Charlotte<br>
                            email: <a href = "mailto:krs@uncc.edu">krs@uncc.edu</a><br> </p>
                          </div>
                        </article><!-- .end Card -->
                      </div>





                      <div class="col-xs-12 col-md-4">
                        <!-- Card -->
                        <article class="card animated fadeInLeft">
                          <img width="300" height="300" class="card-img-top img-responsive" src="./img/sean.jpeg" alt="Deer in nature" />
                          <div class="card-block">
                            <h4 class="card-title">	Dr. Jamie Payton </h4>
                            <h6 class="text-muted">Associate Professor</h6>
                            <p class="card-text">Charlotte Visualization Center<br>
                              Department of Computer Science<br>
                              The University of North Carolina at Charlotte<br>
                              email: <a href = "mailto:krs@uncc.edu">payton@uncc.edu</a><br> </p>
                            </div>
                          </article><!-- .end Card -->
                        </div>








                      </div>
                    </div>

  `
})
export class BridgesTeam {}


@Component({
  selector: 'tutorial',
  templateUrl: 'src/pages/tutorial/tutorial.html'
})
export class Tutorial {}



@Component({
  selector: 'binary-search-tree',
  templateUrl: 'src/pages/tutorial/binary-search-tree.html'
})
export class BST {}


@Component({
  selector: 'binary-tree',
  templateUrl: 'src/pages/tutorial/binary-tree.html'
})
export class BT {}

@Component({
  selector: 'avl-tree',
  templateUrl: 'src/pages/tutorial/avl-tree.html'
})
export class AVLT {}



@Component({
  selector: 'singly-list',
  templateUrl: 'src/pages/tutorial/singly-list.html'
})
export class SL {}



@Component({
  selector: 'doubly-list',
  templateUrl: 'src/pages/tutorial/doubly-list.html'
})
export class DL {}

@Component({
  selector: 'circular-singly-list',
  templateUrl: 'src/pages/tutorial/circular-singly-list.html'
})
export class CSL {}

@Component({
  selector: 'circular-doubly-list',
  templateUrl: 'src/pages/tutorial/circular-doubly-list.html'
})
export class CDL {}


@Component({
  selector: 'graph',
  templateUrl: 'src/pages/tutorial/graph.html'
})
export class GRAPH {}


@Component({
  selector: 'visualizations',
  templateUrl: 'src/pages/tutorial/visualizations.html'
})
export class VISUAL {}


@Component({
  selector: 'my-app',
  directives: [RouterOutlet, RouterLink],
  template:
    `<router-outlet></router-outlet>`

})
@RouteConfig([
  { path: '/',  component: Index, data: { title:  'Home'  } },
  { path: '/assignments',  component: Assignments, data: { title:  'Assignments'  }},
  { path: '/bridges-design',  component: BridgesDesign, data: { title:  'BridgesDesign'  }},
  { path: '/bridges-team',  component: BridgesTeam, data: { title:  'BridgesTeam'  }},
  { path: '/bridges-eval',  component: BridgesEvaluation, data: { title:  'BridgesEvaluation'  }},
  { path: '/bridges-setup',  component: BridgesSetup, data: { title:  'BridgesSetup'  }},
  { path: '/datasets',  component: Datasets, data: { title:  'Datasets'  }},
  { path: '/tutorial',  component: Tutorial, data: { title:  'Tutorial'  }},

  { path: '/binary-search-tree',  component: BST, data: { title:  'BST'  }},
  { path: '/binary-tree',  component: BT, data: { title:  'BT'  }},
  { path: '/avl-tree',  component: AVLT, data: { title:  'AVLT'  }},
  { path: '/singly-list',  component: SL, data: { title:  'SL'  }},
  { path: '/doubly-list',  component: DL, data: { title:  'DL'  }},
  { path: '/circular-singly-list',  component: CSL, data: { title:  'CSL'  }},
  { path: '/circular-doubly-list',  component: CDL, data: { title:  'CDL'  }},
  { path: '/graph',  component: GRAPH, data: { title:  'GRAPH'  }},
  { path: '/visualizations',  component: VISUAL, data: { title:  'VISUALIZATIONS'  }}

  // { path: '/overview',  component: Overview, name: 'Overview'  }
])
export class App {}

// App.parameters = [Router];

// export { App };
