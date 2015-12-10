package uk.co.nickthecoder.gidea.util;

import java.util.LinkedList;

/**
 * Creates thumbnails in a seperate thread
 */

public class JobQueue implements Runnable
{

    private Thread _thread;

    private LinkedList<JobQueueEntry> _queue;

    public JobQueue()
    {
        _queue = new LinkedList<JobQueueEntry>();
    }

    public void add(JobQueueEntry entry)
    {
        if (_queue.contains(entry)) {
            // Do nothing
        } else {
            _queue.add(entry);
            if ((_thread == null) || (!_thread.isAlive())) {
                _thread = new Thread(this);
                _thread.start();
            }
        }
    }

    public void run()
    {
        _thread = Thread.currentThread();

        while (!_queue.isEmpty()) {
            JobQueueEntry item = (JobQueueEntry) _queue.getFirst();
            _queue.removeFirst();

            item.run();
        }
    }

}

