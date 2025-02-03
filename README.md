# Unhandled Memory Leak in Node.js HTTP Server

This repository demonstrates a common, yet subtle, error in Node.js that can lead to significant memory leaks: failing to properly manage HTTP server connections.  The `bug.js` file showcases the problematic code, while `bugSolution.js` provides a corrected version.

## The Problem

The issue lies in the server's handling of incoming requests.  The provided `createServer` function doesn't explicitly close the connection, leading to an accumulation of open sockets and ultimately memory exhaustion. This is particularly problematic under high load.

## The Solution

The `bugSolution.js` demonstrates how to resolve this issue.  The crucial change involves explicitly ending the response using `res.end()`.  This ensures the connection is closed gracefully after processing the request.