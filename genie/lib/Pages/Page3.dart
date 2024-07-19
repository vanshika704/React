import 'package:flutter/material.dart';
import 'package:genie/Pages/remote.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:video_player/video_player.dart';

class Page3 extends StatefulWidget {
  const Page3({super.key});

  @override
  State<Page3> createState() => _Page3State();
}

class _Page3State extends State<Page3> {
  late VideoPlayerController _controller;
  bool _isPlaying = true;

  @override
  void initState() {
    super.initState();
    _controller =
        VideoPlayerController.asset("assets/6981411-hd_1920_1080_25fps.mp4")
          ..initialize().then((_) {
            setState(() {});
            _controller.play();
            _controller.setLooping(true);
          });
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  void _togglePlayPause() {
    setState(() {
      if (_controller.value.isPlaying) {
        _controller.pause();
        _isPlaying = false;
      } else {
        _controller.play();
        _isPlaying = true;
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color.fromARGB(255, 16, 33, 70),
      body: Column(
        children: [
          const SizedBox(height: 30),
          Text(
            "Current Location",
            style: GoogleFonts.poppins(
              textStyle: const TextStyle(
                color: Color.fromARGB(255, 251, 252, 252),
                fontSize: 30,
              ),
            ),
          ),
          const SizedBox(height: 20),
          if (_controller.value.isInitialized)
            Stack(
              alignment: Alignment.center,
              children: [
                Container(
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(20.0),
                    boxShadow: [
                      BoxShadow(
                        color:
                            Color.fromARGB(255, 254, 255, 255).withOpacity(0.8),
                        spreadRadius: 2,
                        blurRadius: 5,
                        offset: const Offset(5, 5),
                      ),
                    ],
                  ),
                  child: ClipRRect(
                    borderRadius: BorderRadius.circular(20.0),
                    child: AspectRatio(
                      aspectRatio: _controller.value.aspectRatio,
                      child: VideoPlayer(_controller),
                    ),
                  ),
                ),
                IconButton(
                  iconSize: 60,
                  color: Colors.white,
                  icon: Icon(
                    _controller.value.isPlaying
                        ? Icons.pause_circle_filled
                        : Icons.play_circle_filled,
                  ),
                  onPressed: _togglePlayPause,
                ),
              ],
            )
          else
            const CircularProgressIndicator(),
          // CircularRemote()
        ],
      ),
    );
  }
}
