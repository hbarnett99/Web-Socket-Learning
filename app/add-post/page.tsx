import { title } from '@/components/primitives';
import { Button, ButtonGroup } from '@nextui-org/button';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { Input, Textarea } from '@nextui-org/input';

export default function AddPostPage() {
  return (
    <div>
      <Card
        className='w-unit-8xl'
        fullWidth
      >
        <form>
          <CardHeader className='align-center justify-center pt-4'>
            <h1 className={title()}>Add Post</h1>
          </CardHeader>
          <CardBody className='gap-2'>
            <Input
              size='sm'
              label='Title'
            />
            <Textarea
              size='sm'
              label='Content'
            />
          </CardBody>
          <CardFooter className='pb-4'>
            <ButtonGroup fullWidth>
              <Button color='primary'>Add Post</Button>
              <Button color='danger'>Cancel</Button>
            </ButtonGroup>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
